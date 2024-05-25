<script setup>
import { RouterView } from 'vue-router'
import ThemeToggler from './components/ThemeToggler.vue'
import PrintPage from './components/PrintPage.vue';

</script>

<template>
  <header class="no-print">
    <PrintPage class="icon" />
    <ThemeToggler class="icon" />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  place-content: end;
  place-items: center;
}
.icon {
  margin-left: 1rem;
}
</style>
