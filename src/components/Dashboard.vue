<script setup lang="ts">
import { ref } from 'vue'
import { stats, modules } from '../data/dashboard'
</script>

<template>
  <div class="container-fluid">
    <h1 class="mt-4">Dashboard</h1>
    
    <!-- Stats Cards -->
    <div class="row">
      <div class="col-xl-3 col-md-6 mb-4" v-for="stat in stats" :key="stat.title">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {{ stat.title }}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ stat.value }}</div>
              </div>
              <div class="col-auto">
                <i :class="['mdi', stat.icon, 'fa-2x', 'text-gray-300']"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Resumen de Módulos</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Módulo</th>
                    <th>Estado</th>
                    <th>Última actualización</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="module in modules" :key="module.name">
                    <td>
                      <i :class="['mdi', module.icon, 'me-2']"></i>
                      {{ module.name }}
                    </td>
                    <td>
                      <span :class="['badge', module.status === 'Activo' ? 'bg-success' : 'bg-warning']">
                        {{ module.status }}
                      </span>
                    </td>
                    <td>{{ module.lastUpdate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Distribución de Certificaciones</h6>
          </div>
          <div class="card-body">
            <div class="chart-pie pt-4">
              <div style="width: 100%; height: 200px; background-color: #e9ecef; display: flex; justify-content: center; align-items: center;">
                <i class="mdi mdi-chart-pie mdi-48px"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-left-primary {
  border-left: 0.25rem solid var(--primary-color) !important;
}

.text-gray-300 {
  color: #dddfeb !important;
}

.text-gray-800 {
  color: #5a5c69 !important;
}

.chart-pie {
  position: relative;
  height: 100%;
}

.mdi-48px {
  font-size: 48px;
  color: #b7b9cc;
}
</style>