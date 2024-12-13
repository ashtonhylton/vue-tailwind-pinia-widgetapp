import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WidgetBadge from '../WidgetBadge.vue'
import type { WidgetModel } from '@/utils/widget-types'
import { ACTION_TYPE, IMPACT_TYPE, WIDGET_COLOR } from '@/utils/widget-enums'

describe('WidgetBadge Component', () => {
  const carbonWidgetModel: WidgetModel = {
    id: 1,
    type: IMPACT_TYPE.CARBON,
    amount: 200,
    action: ACTION_TYPE.OFFSETS,
    active: false,
    linked: false,
    selectedColor: WIDGET_COLOR.GREEN,
  }

  const treeWidgetModel: WidgetModel = {
    id: 2,
    type: IMPACT_TYPE.TREES,
    amount: 15,
    action: ACTION_TYPE.PLANTS,
    active: false,
    linked: false,
    selectedColor: WIDGET_COLOR.GREEN,
  }

  const plasticWidgetModel: WidgetModel = {
    id: 3,
    type: IMPACT_TYPE.PLASTIC_BOTTLES,
    amount: 300,
    action: ACTION_TYPE.COLLECTS,
    active: false,
    linked: false,
    selectedColor: WIDGET_COLOR.GREEN,
  }

  it('renders the carbon type text correctly', () => {
    const wrapper = mount(WidgetBadge, { props: { widget: carbonWidgetModel } })
    expect(wrapper.text()).toContain('This product offsets')
    expect(wrapper.text()).toContain('200kg of carbon')
  })

  it('renders the trees type text correctly', () => {
    const wrapper = mount(WidgetBadge, { props: { widget: treeWidgetModel } })
    expect(wrapper.text()).toContain('This product plants')
    expect(wrapper.text()).toContain('15 trees')
  })

  it('renders the plastic type text correctly', () => {
    const wrapper = mount(WidgetBadge, { props: { widget: plasticWidgetModel } })
    expect(wrapper.text()).toContain('This product collects')
    expect(wrapper.text()).toContain('300 plastic bottles')
  })
})
