<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import { useMainStore } from './store/main.store'
import WidgetsComponent from './components/WidgetsComponent.vue'
import { initFlowbite, initPopovers } from 'flowbite'

const mainStore = useMainStore()

onBeforeMount(async () => {
  mainStore.initialise()
})

onMounted(() => {
  initFlowbite()
  initPopovers()
})
</script>

<template>
  <main class="container mx-auto">
    <WidgetsComponent />
  </main>
</template>

<style scoped></style>
