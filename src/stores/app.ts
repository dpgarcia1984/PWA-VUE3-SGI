import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    companyName: 'Refinería Cienfuegos S.A.',
    systemName: 'Sistema de Gestión Integral',
    slogan: 'Impulsando la excelencia en cada proceso',
    currentYear: new Date().getFullYear()
  })
})