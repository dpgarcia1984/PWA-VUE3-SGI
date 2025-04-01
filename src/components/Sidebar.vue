<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../stores/app'
import { navItems } from '../data/navigation'

const store = useAppStore()
defineProps<{
  visible: boolean
}>()

const toggleAccordion = (index: number) => {
  navItems[index].isOpen = !navItems[index].isOpen
}
</script>

<template>
  <div class="sidebar" :class="{ 'collapsed': !visible }">
    <div class="sidebar-header">
      <h3 class="text-light">{{ store.companyName }}</h3>
    </div>
    <nav class="sidebar-menu">
      <div class="accordion" id="sidebarAccordion">
        <div class="accordion-item bg-dark" v-for="(item, index) in navItems" :key="index">
          <h2 class="accordion-header" :id="'heading' + index">
            <button class="accordion-button" :class="{ 'collapsed': !item.isOpen }" 
                    type="button" data-bs-toggle="collapse" 
                    :data-bs-target="'#collapse' + index" 
                    aria-expanded="true" 
                    :aria-controls="'collapse' + index"
                    @click="toggleAccordion(index)">
              <i :class="item.icon"></i> {{ item.text }}
            </button>
          </h2>
          <div :id="'collapse' + index" 
               class="accordion-collapse collapse" 
               :class="{ 'show': item.isOpen }" 
               :aria-labelledby="'heading' + index" 
               data-bs-parent="#sidebarAccordion">
            <div class="accordion-body">
              <a v-for="subItem in item.subItems" 
                 :key="subItem.text" 
                 :href="subItem.link" 
                 class="nav-link">
                <i :class="subItem.icon"></i> {{ subItem.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--dark-color);
  transition: all 0.3s;
  z-index: 1000;
  overflow-y: auto;
  padding-bottom: 60px;
}

.sidebar.collapsed {
  margin-left: -280px;
}

.sidebar-header {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-menu {
  padding: 20px 0;
}

.accordion-button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}

.accordion-button:not(.collapsed) {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
}

.accordion-button::after {
  filter: invert(1);
}

.accordion-body {
  padding: 0;
}

.accordion-body a {
  padding-left: 2rem;
}

.nav-link {
  color: #fff;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link i {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .sidebar {
    margin-left: -280px;
  }
  .sidebar.active {
    margin-left: 0;
  }
}
</style>