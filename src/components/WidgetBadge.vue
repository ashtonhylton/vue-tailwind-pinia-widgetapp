<script setup lang="ts">
import { CUSTOM_BACKGROUND_COLOR } from '@/utils/widget-constants'
import type { WidgetModel } from '@/utils/widget-types'

defineProps<{
  widget: WidgetModel
}>()
</script>

<template>
  <div
    class="shrink-0 p-6 lg:px-3 xl:px-6 mb-5 rounded-xl flex items-center gap-x-4 text-white"
    :class="CUSTOM_BACKGROUND_COLOR[widget.selectedColor]"
  >
    <div class="widget-logo"></div>
    <div class="ml-2">
      <p class="text-xl lg:text-sm xl:text-xl mb-2">This product {{ widget.action }}</p>
      <p v-if="widget.type === 'carbon'" class="text-2xl lg:text-lg xl:text-2xl font-medium">
        {{ widget.amount }}kg of {{ widget.type }}
      </p>
      <p v-else class="text-2xl lg:text-lg xl:text-2xl font-medium">
        {{ widget.amount }} {{ widget.type }}
      </p>
    </div>
  </div>
</template>