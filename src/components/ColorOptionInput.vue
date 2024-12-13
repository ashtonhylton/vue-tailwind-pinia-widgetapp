<script setup lang="ts">
import type { WIDGET_COLOR } from '@/utils/widget-enums'
import type { WidgetModel } from '@/utils/widget-types'
import { CUSTOM_BACKGROUND_COLOR } from '@/utils/widget-constants'

const widgetModel = defineModel()
defineProps<{
  colorOption: WIDGET_COLOR
  modelValue: WidgetModel
}>()
</script>

<template>
  <div>
    <input
      type="checkbox"
      class="appearance-none w-6 h-6 shadow checked:border-custom-grey checked:border-2 hover:opacity-50 align-middle"
      :class="CUSTOM_BACKGROUND_COLOR[colorOption]"
      v-bind:checked="modelValue.selectedColor === colorOption"
      v-bind:disabled="modelValue.selectedColor === colorOption"
      :value="colorOption"
      @input="
        ($event) =>
          (widgetModel = {
            ...modelValue,
            selectedColor: ($event.target as HTMLInputElement).value,
          })
      "
    />
  </div>
</template>
