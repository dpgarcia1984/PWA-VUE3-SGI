<script setup lang="ts">
defineEmits(['toggle-sidebar'])
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container-fluid">
      <button @click="$emit('toggle-sidebar')" class="btn btn-primary">
        <i :class="['mdi', sidebarVisible ? 'mdi-menu-open' : 'mdi-menu']"></i>
      </button>
      
      <div class="ms-auto d-flex">
        <div class="dropdown me-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" 
                  id="modulesDropdown" data-bs-toggle="dropdown">
            <i class="mdi mdi-view-grid-plus"></i> Módulos
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-plus-circle-outline me-2"></i>Nuevo módulo</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-cog-outline me-2"></i>Configurar módulos</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-view-list-outline me-2"></i>Ver todos los módulos</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-refresh me-2"></i>Actualizar módulos</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-chart-bar me-2"></i>Estadísticas de módulos</a></li>
          </ul>
        </div>

        <div class="dropdown me-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" 
                  id="isoDropdown" data-bs-toggle="dropdown">
            <i class="mdi mdi-certificate-outline"></i> ISO
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-numeric-9-plus-circle-outline me-2"></i>ISO 9001</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-leaf me-2"></i>ISO 14001</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-flask me-2"></i>ISO 17025</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-security me-2"></i>ISO 45001</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-flash me-2"></i>ISO 50001</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-sync me-2"></i>Integración de normas</a></li>
          </ul>
        </div>

        <div class="dropdown me-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" 
                  id="processesDropdown" data-bs-toggle="dropdown">
            <i class="mdi mdi-cogs"></i> Procesos
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-sitemap me-2"></i>Mapa de procesos</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-plus-box-outline me-2"></i>Nuevo proceso</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-pencil-outline me-2"></i>Editar procesos</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-chart-line me-2"></i>Indicadores de procesos</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-arrow-decision-outline me-2"></i>Flujos de trabajo</a></li>
          </ul>
        </div>

        <div class="dropdown me-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" 
                  id="documentsDropdown" data-bs-toggle="dropdown">
            <i class="mdi mdi-file-document-multiple-outline"></i> Documentos
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-file-plus-outline me-2"></i>Nuevo documento</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-folder-open-outline me-2"></i>Repositorio documental</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-text-box-check-outline me-2"></i>Revisión de documentos</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-history me-2"></i>Historial de versiones</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-file-search-outline me-2"></i>Búsqueda avanzada</a></li>
          </ul>
        </div>

        <div class="dropdown me-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" 
                  id="reportsDropdown" data-bs-toggle="dropdown">
            <i class="mdi mdi-file-chart-outline"></i> Informes
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-file-chart me-2"></i>Generar informe</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-history me-2"></i>Historial de informes</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-chart-areaspline me-2"></i>Análisis de datos</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-chart-timeline-variant me-2"></i>Tendencias</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-table-large me-2"></i>Cuadros de mando</a></li>
          </ul>
        </div>

        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" 
                  id="userDropdown" data-bs-toggle="dropdown">
            <i class="mdi mdi-account-circle"></i> Usuario
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-account-edit me-2"></i>Perfil</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-cog me-2"></i>Configuración</a></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-bell-outline me-2"></i>Notificaciones</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#"><i class="mdi mdi-logout me-2"></i>Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 1rem;
  margin-bottom: 1rem;
}

.dropdown-menu {
  min-width: 200px;
}

.btn-secondary {
  background-color: var(--light-color);
  color: var(--dark-color);
  border: 1px solid #dee2e6;
}

.btn-secondary:hover {
  background-color: #e9ecef;
  border-color: #dee2e6;
}
</style>