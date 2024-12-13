import { getProductWidgetData } from '@/services/product-widgets.service'
import type { WidgetModel, Widgets } from '@/utils/widget-types'
import { defineStore } from 'pinia'

interface MainStore {
  widgets: Widgets
}

export const useMainStore = defineStore('main', {
  state: (): MainStore => ({
    widgets: {},
  }),
  getters: {
    getWidgets: (state) => state.widgets,
    getWidgetById:
      (state) =>
      (widgetId: number): WidgetModel | null =>
        state.widgets[widgetId],
  },
  actions: {
    initialise() {
      getProductWidgetData().then((widgetResponse) => {
        widgetResponse.forEach((widget: WidgetModel) => {
          this.widgets[widget.id] = widget
        })
      })
    },
    toggleActiveWidget(widgetId: number) {
      for (const key in this.widgets) {
        const widget = this.widgets[key]
        widget.active = widgetId === widget.id && !widget.active
      }
    },
    updateWidgetById(widgetId: number, widgetChange: WidgetModel) {
      console.log('updateWidgetById', widgetChange)
      this.widgets = {
        ...this.widgets,
        ...(widgetId ? { [widgetId]: widgetChange } : {}),
      }
    },
  },
})
