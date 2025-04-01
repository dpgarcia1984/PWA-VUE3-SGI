<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <span>&copy; {{ store.currentYear }} {{ store.companyName }} - {{ store.systemName }} | {{ store.slogan }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--dark-color);
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
</style>