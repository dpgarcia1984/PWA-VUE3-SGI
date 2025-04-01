export const navItems = [
  { 
    text: 'Dashboard', 
    icon: 'mdi mdi-view-dashboard', 
    isOpen: false,
    subItems: [
      { text: 'Resumen General', link: '#', icon: 'mdi mdi-chart-box-outline' },
      { text: 'Indicadores Clave', link: '#', icon: 'mdi mdi-chart-line' },
      { text: 'Alertas', link: '#', icon: 'mdi mdi-alert-circle-outline' },
      { text: 'Tendencias', link: '#', icon: 'mdi mdi-trending-up' },
      { text: 'Comparativas', link: '#', icon: 'mdi mdi-compare' }
    ]
  },
  { 
    text: 'ISO 9001', 
    icon: 'mdi mdi-certificate-outline', 
    isOpen: false,
    subItems: [
      { text: 'Política de Calidad', link: '#', icon: 'mdi mdi-file-document-outline' },
      { text: 'Objetivos de Calidad', link: '#', icon: 'mdi mdi-target' },
      { text: 'Auditorías Internas', link: '#', icon: 'mdi mdi-clipboard-check-outline' },
      { text: 'Control de Documentos', link: '#', icon: 'mdi mdi-file-multiple-outline' },
      { text: 'No Conformidades', link: '#', icon: 'mdi mdi-alert-outline' },
      { text: 'Acciones Correctivas', link: '#', icon: 'mdi mdi-arrow-up-bold-circle-outline' },
      { text: 'Satisfacción del Cliente', link: '#', icon: 'mdi mdi-emoticon-happy-outline' },
      { text: 'Mejora Continua', link: '#', icon: 'mdi mdi-sync' }
    ]
  },
  { 
    text: 'ISO 14001', 
    icon: 'mdi mdi-leaf-circle', 
    isOpen: false,
    subItems: [
      { text: 'Política Ambiental', link: '#', icon: 'mdi mdi-file-document-outline' },
      { text: 'Aspectos Ambientales', link: '#', icon: 'mdi mdi-nature' },
      { text: 'Gestión de Residuos', link: '#', icon: 'mdi mdi-recycle' },
      { text: 'Emisiones Atmosféricas', link: '#', icon: 'mdi mdi-factory' },
      { text: 'Efluentes Líquidos', link: '#', icon: 'mdi mdi-water-outline' },
      { text: 'Consumo de Recursos', link: '#', icon: 'mdi mdi-battery-charging-outline' },
      { text: 'Planes de Emergencia Ambiental', link: '#', icon: 'mdi mdi-shield-alert-outline' },
      { text: 'Evaluación de Cumplimiento Legal', link: '#', icon: 'mdi mdi-gavel' }
    ]
  },
  { 
    text: 'ISO 17025', 
    icon: 'mdi mdi-flask-outline', 
    isOpen: false,
    subItems: [
      { text: 'Métodos de Ensayo', link: '#', icon: 'mdi mdi-test-tube' },
      { text: 'Calibración', link: '#', icon: 'mdi mdi-scale-balance' },
      { text: 'Registros de Calidad', link: '#', icon: 'mdi mdi-clipboard-text-outline' },
      { text: 'Control de Equipos', link: '#', icon: 'mdi mdi-microscope' },
      { text: 'Aseguramiento de la Calidad', link: '#', icon: 'mdi mdi-shield-check-outline' },
      { text: 'Validación de Métodos', link: '#', icon: 'mdi mdi-check-circle-outline' },
      { text: 'Incertidumbre de Mediciones', link: '#', icon: 'mdi mdi-chart-bell-curve' },
      { text: 'Informes de Resultados', link: '#', icon: 'mdi mdi-file-chart-outline' }
    ]
  },
  { 
    text: 'ISO 45001', 
    icon: 'mdi mdi-hard-hat', 
    isOpen: false,
    subItems: [
      { text: 'Política de SST', link: '#', icon: 'mdi mdi-file-document-outline' },
      { text: 'Identificación de Peligros', link: '#', icon: 'mdi mdi-alert-octagon-outline' },
      { text: 'Evaluación de Riesgos', link: '#', icon: 'mdi mdi-chart-risk' },
      { text: 'Planes de Emergencia', link: '#', icon: 'mdi mdi-ambulance' },
      { text: 'Investigación de Incidentes', link: '#', icon: 'mdi mdi-magnify' },
      { text: 'Formación en SST', link: '#', icon: 'mdi mdi-school-outline' },
      { text: 'Equipos de Protección Personal', link: '#', icon: 'mdi mdi-shield-account-outline' },
      { text: 'Auditorías de Seguridad', link: '#', icon: 'mdi mdi-clipboard-check-outline' }
    ]
  },
  { 
    text: 'ISO 50001', 
    icon: 'mdi mdi-lightning-bolt-circle', 
    isOpen: false,
    subItems: [
      { text: 'Política Energética', link: '#', icon: 'mdi mdi-file-document-outline' },
      { text: 'Consumo Energético', link: '#', icon: 'mdi mdi-flash' },
      { text: 'Eficiencia Energética', link: '#', icon: 'mdi mdi-lightbulb-on-outline' },
      { text: 'Línea Base Energética', link: '#', icon: 'mdi mdi-chart-line' },
      { text: 'Indicadores de Desempeño Energético', link: '#', icon: 'mdi mdi-speedometer' },
      { text: 'Objetivos y Metas Energéticas', link: '#', icon: 'mdi mdi-target' },
      { text: 'Planes de Acción Energética', link: '#', icon: 'mdi mdi-clipboard-outline' },
      { text: 'Auditorías Energéticas', link: '#', icon: 'mdi mdi-clipboard-check-outline' }
    ]
  },
  { 
    text: 'Informes', 
    icon: 'mdi mdi-file-chart', 
    isOpen: false,
    subItems: [
      { text: 'Generar Informe', link: '#', icon: 'mdi mdi-file-plus-outline' },
      { text: 'Histórico de Informes', link: '#', icon: 'mdi mdi-history' },
      { text: 'Análisis de Datos', link: '#', icon: 'mdi mdi-chart-bar' },
      { text: 'Informes de Auditoría', link: '#', icon: 'mdi mdi-clipboard-text-outline' },
      { text: 'Informes de Desempeño', link: '#', icon: 'mdi mdi-chart-line' },
      { text: 'Informes de No Conformidades', link: '#', icon: 'mdi mdi-alert-circle-outline' },
      { text: 'Informes de Mejora Continua', link: '#', icon: 'mdi mdi-arrow-up-bold-circle-outline' },
      { text: 'Cuadros de Mando', link: '#', icon: 'mdi mdi-view-dashboard-variant' }
    ]
  },
  { 
    text: 'Configuración', 
    icon: 'mdi mdi-cog-outline', 
    isOpen: false,
    subItems: [
      { text: 'Perfil de Usuario', link: '#', icon: 'mdi mdi-account-cog' },
      { text: 'Preferencias del Sistema', link: '#', icon: 'mdi mdi-tune' },
      { text: 'Gestión de Módulos', link: '#', icon: 'mdi mdi-view-grid-plus-outline' },
      { text: 'Configuración de Notificaciones', link: '#', icon: 'mdi mdi-bell-outline' },
      { text: 'Seguridad y Permisos', link: '#', icon: 'mdi mdi-shield-lock-outline' },
      { text: 'Personalización de Informes', link: '#', icon: 'mdi mdi-file-cog-outline' },
      { text: 'Copias de Seguridad', link: '#', icon: 'mdi mdi-backup-restore' },
      { text: 'Integración de Sistemas', link: '#', icon: 'mdi mdi-puzzle-outline' }
    ]
  }
]