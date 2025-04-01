<script setup lang="ts">
import { ref, computed } from 'vue'
import { useISO9001Store } from '@/stores/iso9001'
import type { QualityObjective } from '@/stores/iso9001'

const store = useISO9001Store()
const showForm = ref(false)
const editingObjective = ref<QualityObjective | null>(null)

const newObjective = ref({
  id: '',
  description: '',
  target: 0,
  current: 0,
  status: 'pending',
  dueDate: new Date()
})

const statusClasses = {
  'pending': 'bg-warning',
  'in-progress': 'bg-info',
  'completed': 'bg-success'
}

const statusLabels = {
  'pending': 'Pendiente',
  'in-progress': 'En Progreso',
  'completed': 'Completado'
}

const progress = computed(() => {
  const total = store.qualityObjectives.length
  if (total === 0) return 0
  const completed = store.qualityObjectives.filter(obj => obj.status === 'completed').length
  return Math.round((completed / total) * 100)
})

const addObjective = () => {
  const objective = {
    ...newObjective.value,
    id: crypto.randomUUID()
  }
  store.addQualityObjective(objective)
  showForm.value = false
  newObjective.value = {
    id: '',
    description: '',
    target: 0,
    current: 0,
    status: 'pending',
    dueDate: new Date()
  }
}

const editObjective = (objective: QualityObjective) => {
  editingObjective.value = { ...objective }
  showForm.value = true
}

const updateObjective = () => {
  if (editingObjective.value) {
    store.updateQualityObjective(editingObjective.value.id, editingObjective.value)
    editingObjective.value = null
    showForm.value = false
  }
}

const downloadReport = () => {
  // Implementar la generación del informe PDF
}
</script>

<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Objetivos de Calidad</h1>
      <div>
        <button @click="showForm = true" class="btn btn-primary me-2" v-if="!showForm">
          <i class="mdi mdi-plus me-1"></i> Nuevo Objetivo
        </button>
        <button @click="downloadReport" class="btn btn-secondary">
          <i class="mdi mdi-download me-1"></i> Descargar Informe
        </button>
      </div>
    </div>

    <!-- Progreso General -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Progreso General</h6>
      </div>
      <div class="card-body">
        <div class="progress mb-2">
          <div class="progress-bar" role="progressbar" :style="{ width: `${progress}%` }"
               :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
            {{ progress }}%
          </div>
        </div>
        <small class="text-muted">
          {{ store.qualityObjectives.filter(obj => obj.status === 'completed').length }} de 
          {{ store.qualityObjectives.length }} objetivos completados
        </small>
      </div>
    </div>

    <!-- Formulario -->
    <div class="card shadow mb-4" v-if="showForm">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          {{ editingObjective ? 'Editar Objetivo' : 'Nuevo Objetivo' }}
        </h6>
      </div>
      <div class="card-body">
        <form @submit.prevent="editingObjective ? updateObjective() : addObjective()">
          <div class="mb-3">
            <label class="form-label">Descripción</label>
            <textarea
              v-model="editingObjective ? editingObjective.description : newObjective.description"
              class="form-control"
              required
            ></textarea>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Meta</label>
              <input
                type="number"
                v-model="editingObjective ? editingObjective.target : newObjective.target"
                class="form-control"
                required
              >
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Valor Actual</label>
              <input
                type="number"
                v-model="editingObjective ? editingObjective.current : newObjective.current"
                class="form-control"
                required
              >
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Estado</label>
              <select
                v-model="editingObjective ? editingObjective.status : newObjective.status"
                class="form-select"
                required
              >
                <option value="pending">Pendiente</option>
                <option value="in-progress">En Progreso</option>
                <option value="completed">Completado</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Fecha Límite</label>
              <input
                type="date"
                v-model="editingObjective ? editingObjective.dueDate : newObjective.dueDate"
                class="form-control"
                required
              >
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" @click="showForm = false" class="btn btn-secondary me-2">
              Cancelar
            </button>
            <button type="submit" class="btn btn-primary">
              {{ editingObjective ? 'Actualizar' : 'Guardar' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Lista de Objetivos -->
    <div class="card shadow">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Lista de Objetivos</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Meta</th>
                <th>Actual</th>
                <th>Estado</th>
                <th>Fecha Límite</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="objective in store.qualityObjectives" :key="objective.id">
                <td>{{ objective.description }}</td>
                <td>{{ objective.target }}</td>
                <td>{{ objective.current }}</td>
                <td>
                  <span :class="['badge', statusClasses[objective.status]]">
                    {{ statusLabels[objective.status] }}
                  </span>
                </td>
                <td>{{ new Date(objective.dueDate).toLocaleDateString() }}</td>
                <td>
                  <button @click="editObjective(objective)" class="btn btn-sm btn-primary me-1">
                    <i class="mdi mdi-pencil"></i>
                  </button>
                  <button class="btn btn-sm btn-danger">
                    <i class="mdi mdi-delete"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  height: 20px;
}

.progress-bar {
  background-color: var(--primary-color);
}

.badge {
  padding: 0.5em 0.75em;
}
</style>