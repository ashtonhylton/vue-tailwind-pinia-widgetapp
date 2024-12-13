<script setup lang="ts">
import { useMainStore } from '@/store/main.store'
import type { WidgetModel } from '@/utils/widget-types'

const mainStore = useMainStore()
const toggleActiveWidget = mainStore.toggleActiveWidget
const props = defineProps<{
  widget: WidgetModel
}>()

const activeWidgetModel = defineModel({
  get: () => props.widget.active,
  set() {
    toggleActiveWidget(props.widget.id)
  },
})
</script>

<template>
  <div class="flex justify-between mb-4">
    <p>Active</p>
    <div>
      <label class="relative flex justify-between items-center group p-2 text-xl">
        <input
          type="checkbox"
          class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
          v-model="activeWidgetModel"
        />
        <span
          class="w-[45px] h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-white shadow-inner rounded-full peer-checked:bg-custom-green after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md hover:after:duration-0 after:border-1px after:border-custom-beige after:translate-x-[-5px] peer-checked:after:translate-x-[22px] border-[1px] border-custom-lightgreen peer-checked:border-custom-grey after:border-[1px] after:border-custom-beige peer-checked:after:border-custom-green group-hover:after:custom-background after:scustom-background"
        ></span>
      </label>
    </div>
  </div>
</template>

<style scoped></style>
