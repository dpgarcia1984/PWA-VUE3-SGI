<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Dashboard from './components/Dashboard.vue'
import Footer from './components/Footer.vue'
import { useAppStore } from './stores/app'

const store = useAppStore()
const sidebarVisible = ref(true)

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}
</script>

<template>
  <div id="app">
    <Sidebar :visible="sidebarVisible" />
    <div class="content" :class="{ 'expanded': !sidebarVisible }">
      <Navbar @toggle-sidebar="toggleSidebar" />
      <Dashboard />
    </div>
    <Footer />
  </div>
</template>