<script setup lang="ts">
import { onMounted } from 'vue'
import { Popover } from 'flowbite'
import type { WidgetModel } from '@/utils/widget-types'

const props = defineProps<{
  widget: WidgetModel
}>()

const popoverContentId = 'widget-popover-' + props.widget.id
const popoverButtonId = 'widget-popover-button-' + props.widget.id

onMounted(() => {
  const popoverOptions = {}
  const popoverContentElement = document.getElementById(popoverContentId)
  const popoverButtonElement = document.getElementById(popoverButtonId)
  if (popoverContentElement) {
    new Popover(popoverContentElement, popoverButtonElement, popoverOptions)
  }
})
</script>

<template>
  <p class="flex items-center">
    <button :id="popoverButtonId" data-popover-placement="bottom-end" type="button">
      <img
        class="w-6 h-6 relative -top-2 ml-1"
        aria-hidden="true"
        src="./../assets/info-outline.svg"
      />
    </button>
  </p>
  <div
    data-popover
    :id="popoverContentId"
    role="tooltip"
    class="absolute z-10 invisible inline-block text-1xl transition-opacity duration-300 text-black text-center bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-96"
  >
    <div class="p-8">
      <p class="mb-5">
        This widget links directly to your public profile so that you can easily share your impact
        with your customers. Turn it off here if you do not want the badge to link to it.
      </p>
      <a href="#" class="text-custom-green">View Public Profile</a>
    </div>
  </div>
</template>
