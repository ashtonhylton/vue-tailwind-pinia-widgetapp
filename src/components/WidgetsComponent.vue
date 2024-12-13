<script setup lang="ts">
import { useMainStore } from '@/store/main.store'
import WidgetComponent from './WidgetComponent.vue'

const mainStore = useMainStore()
</script>

<template>
  <div class="w-fit p-10 my-20 mx-auto rounded shadow-4 shadow-lg">
    <h2 class="text-4xl font-medium border-b-2 pb-5">Per product widgets</h2>
    <div class="justify-center gap-x-10 lg:gap-x-5 xl:gap-x-10 p-6 lg:px-0 lg:columns-3">
      <template v-for="(widget, index) in mainStore.widgets" :key="index">
        <WidgetComponent :widget="widget" />
      </template>
    </div>
  </div>
</template>