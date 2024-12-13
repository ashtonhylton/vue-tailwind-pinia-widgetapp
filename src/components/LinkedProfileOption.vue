<script setup lang="ts">
import type { WidgetModel } from '@/utils/widget-types'
import TooltipComponent from './TooltipComponent.vue'

const widgetModel = defineModel()
defineProps<{
  modelValue: WidgetModel
}>()
</script>

<template>
  <div class="flex justify-between mb-4">
    <div class="flex">
      <p>Linked to Public Profile</p>
      <TooltipComponent :widget="modelValue" />
    </div>

    <div class="flex items-center align-middle">
      <input
        type="checkbox"
        v-bind:checked="modelValue.linked"
        @input="
          ($event) =>
            (widgetModel = {
              ...modelValue,
              linked: ($event.target as HTMLInputElement).checked,
            })
        "
        class="peer/checkbox scale-[150%] mr-2 accent-custom-green bg-white checked:border-none border-black hover:border-grey-200 rounded hover:custom-background hover:[clip-path:circle(90%)]"
      />
    </div>
  </div>
</template>