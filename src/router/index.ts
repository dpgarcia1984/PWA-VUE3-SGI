import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import ISO9001Dashboard from '@/views/iso9001/Dashboard.vue'
import QualityPolicy from '@/views/iso9001/QualityPolicy.vue'
import QualityObjectives from '@/views/iso9001/QualityObjectives.vue'
import InternalAudits from '@/views/iso9001/InternalAudits.vue'
import DocumentControl from '@/views/iso9001/DocumentControl.vue'
import NonConformities from '@/views/iso9001/NonConformities.vue'
import CorrectiveActions from '@/views/iso9001/CorrectiveActions.vue'
import CustomerSatisfaction from '@/views/iso9001/CustomerSatisfaction.vue'
import ContinuousImprovement from '@/views/iso9001/ContinuousImprovement.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/iso9001',
    name: 'ISO9001Dashboard',
    component: ISO9001Dashboard
  },
  {
    path: '/iso9001/quality-policy',
    name: 'QualityPolicy',
    component: QualityPolicy
  },
  {
    path: '/iso9001/quality-objectives',
    name: 'QualityObjectives',
    component: QualityObjectives
  },
  {
    path: '/iso9001/internal-audits',
    name: 'InternalAudits',
    component: InternalAudits
  },
  {
    path: '/iso9001/document-control',
    name: 'DocumentControl',
    component: DocumentControl
  },
  {
    path: '/iso9001/non-conformities',
    name: 'NonConformities',
    component: NonConformities
  },
  {
    path: '/iso9001/corrective-actions',
    name: 'CorrectiveActions',
    component: CorrectiveActions
  },
  {
    path: '/iso9001/customer-satisfaction',
    name: 'CustomerSatisfaction',
    component: CustomerSatisfaction
  },
  {
    path: '/iso9001/continuous-improvement',
    name: 'ContinuousImprovement',
    component: ContinuousImprovement
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router