<script setup lang="ts">
import type { WidgetModel } from '@/utils/widget-types'
import { useMainStore } from '@/store/main.store'
import WidgetBadge from './WidgetBadge.vue'
import LinkedProfileOption from './LinkedProfileOption.vue'
import BadgeColorOption from './BadgeColorOption.vue'
import ActiveOption from './ActiveOption.vue'

const props = defineProps<{
  widget: WidgetModel
}>()

const mainStore = useMainStore()
const updateWidget = mainStore.updateWidgetById

const widgetModel = defineModel({
  get: () => mainStore.getWidgetById(props.widget.id),
  set(value: WidgetModel) {
    updateWidget(props.widget.id, {
      ...value,
    })
  },
})
</script>

<template>
  <div v-if="widget" class="widget-container mb-10">
    <WidgetBadge :widget="widget" />

    <div class="widget-options text-custom-green text-xl px-2">
      <LinkedProfileOption v-model="widgetModel" />

      <BadgeColorOption v-model="widgetModel" />

      <ActiveOption :widget="widget" />
    </div>
  </div>
  <div v-else><h2>No Widget Found</h2></div>
</template>