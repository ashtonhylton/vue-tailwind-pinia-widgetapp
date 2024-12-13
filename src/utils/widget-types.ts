import type { ACTION_TYPE, IMPACT_TYPE, WIDGET_COLOR } from './widget-enums'

export interface WidgetModel {
  id: number
  type: IMPACT_TYPE
  amount: number
  action: ACTION_TYPE
  active: boolean
  linked: boolean
  selectedColor: WIDGET_COLOR
}

export interface Widgets {
  [id: number]: WidgetModel
}
