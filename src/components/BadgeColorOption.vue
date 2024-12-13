<script setup lang="ts">
import type { WidgetModel } from '@/utils/widget-types'
import { WIDGET_COLOR } from '@/utils/widget-enums'
import ColorOptionInput from './ColorOptionInput.vue'

const widgetModel = defineModel()
defineProps<{
  modelValue: WidgetModel
}>()
</script>

<template>
  <div class="flex justify-between mb-4">
    <p>Badge colour</p>
    <div class="flex gap-2">
      <ColorOptionInput :colorOption="WIDGET_COLOR.BLUE" v-model="widgetModel" />
      <ColorOptionInput :colorOption="WIDGET_COLOR.GREEN" v-model="widgetModel" />
      <ColorOptionInput :colorOption="WIDGET_COLOR.BEIGE" v-model="widgetModel" />
      <ColorOptionInput :colorOption="WIDGET_COLOR.WHITE" v-model="widgetModel" />
      <ColorOptionInput :colorOption="WIDGET_COLOR.BLACK" v-model="widgetModel" />
    </div>
  </div>
</template>