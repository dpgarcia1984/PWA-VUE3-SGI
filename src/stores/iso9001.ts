import { defineStore } from 'pinia'

export interface QualityObjective {
  id: string
  description: string
  target: number
  current: number
  status: 'pending' | 'in-progress' | 'completed'
  dueDate: Date
}

export interface Audit {
  id: string
  type: string
  date: Date
  auditor: string
  scope: string
  findings: string[]
  status: 'planned' | 'in-progress' | 'completed'
}

export interface Document {
  id: string
  code: string
  title: string
  version: string
  date: Date
  status: 'draft' | 'review' | 'approved' | 'obsolete'
  type: string
  owner: string
  reviewers: string[]
  approvers: string[]
  url: string
}

export interface NonConformity {
  id: string
  code: string
  description: string
  detectionDate: Date
  process: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  status: 'open' | 'in-progress' | 'closed'
  responsiblePerson: string
  correctiveActions: string[]
}

export interface CorrectiveAction {
  id: string
  nonConformityId: string
  description: string
  assignedTo: string
  dueDate: Date
  status: 'pending' | 'in-progress' | 'completed'
  effectiveness: string
  verificationDate: Date | null
}

export interface CustomerSatisfaction {
  id: string
  surveyDate: Date
  customerName: string
  productService: string
  ratings: {
    quality: number
    delivery: number
    communication: number
    support: number
    overall: number
  }
  comments: string
  followUpActions: string[]
}

export interface ImprovementInitiative {
  id: string
  title: string
  description: string
  proposedBy: string
  proposalDate: Date
  status: 'proposed' | 'approved' | 'in-progress' | 'completed' | 'rejected'
  benefits: string[]
  resources: string[]
  progress: number
}

export const useISO9001Store = defineStore('iso9001', {
  state: () => ({
    qualityPolicy: {
      content: '',
      lastReviewDate: null as Date | null,
      nextReviewDate: null as Date | null,
      version: '1.0',
      approvedBy: ''
    },
    qualityObjectives: [] as QualityObjective[],
    audits: [] as Audit[],
    documents: [] as Document[],
    nonConformities: [] as NonConformity[],
    correctiveActions: [] as CorrectiveAction[],
    customerSatisfaction: [] as CustomerSatisfaction[],
    improvementInitiatives: [] as ImprovementInitiative[]
  }),

  getters: {
    completedObjectives: (state) => 
      state.qualityObjectives.filter(obj => obj.status === 'completed').length,
    
    openNonConformities: (state) =>
      state.nonConformities.filter(nc => nc.status === 'open').length,
    
    averageCustomerSatisfaction: (state) => {
      if (state.customerSatisfaction.length === 0) return 0
      const total = state.customerSatisfaction.reduce(
        (sum, cs) => sum + cs.ratings.overall, 
        0
      )
      return total / state.customerSatisfaction.length
    },

    documentsByStatus: (state) => {
      return {
        draft: state.documents.filter(d => d.status === 'draft').length,
        review: state.documents.filter(d => d.status === 'review').length,
        approved: state.documents.filter(d => d.status === 'approved').length,
        obsolete: state.documents.filter(d => d.status === 'obsolete').length
      }
    }
  },

  actions: {
    // Quality Policy
    updateQualityPolicy(policy: typeof this.qualityPolicy) {
      this.qualityPolicy = policy
    },

    // Quality Objectives
    addQualityObjective(objective: QualityObjective) {
      this.qualityObjectives.push(objective)
    },
    updateQualityObjective(id: string, objective: QualityObjective) {
      const index = this.qualityObjectives.findIndex(obj => obj.id === id)
      if (index !== -1) {
        this.qualityObjectives[index] = objective
      }
    },
    deleteQualityObjective(id: string) {
      this.qualityObjectives = this.qualityObjectives.filter(obj => obj.id !== id)
    },

    // Audits
    addAudit(audit: Audit) {
      this.audits.push(audit)
    },
    updateAudit(id: string, audit: Audit) {
      const index = this.audits.findIndex(a => a.id === id)
      if (index !== -1) {
        this.audits[index] = audit
      }
    },
    deleteAudit(id: string) {
      this.audits = this.audits.filter(a => a.id !== id)
    },

    // Documents
    addDocument(document: Document) {
      this.documents.push(document)
    },
    updateDocument(id: string, document: Document) {
      const index = this.documents.findIndex(d => d.id === id)
      if (index !== -1) {
        this.documents[index] = document
      }
    },
    deleteDocument(id: string) {
      this.documents = this.documents.filter(d => d.id !== id)
    },

    // Non-conformities
    addNonConformity(nonConformity: NonConformity) {
      this.nonConformities.push(nonConformity)
    },
    updateNonConformity(id: string, nonConformity: NonConformity) {
      const index = this.nonConformities.findIndex(nc => nc.id === id)
      if (index !== -1) {
        this.nonConformities[index] = nonConformity
      }
    },
    deleteNonConformity(id: string) {
      this.nonConformities = this.nonConformities.filter(nc => nc.id !== id)
    },

    // Corrective Actions
    addCorrectiveAction(action: CorrectiveAction) {
      this.correctiveActions.push(action)
    },
    updateCorrectiveAction(id: string, action: CorrectiveAction) {
      const index = this.correctiveActions.findIndex(ca => ca.id === id)
      if (index !== -1) {
        this.correctiveActions[index] = action
      }
    },
    deleteCorrectiveAction(id: string) {
      this.correctiveActions = this.correctiveActions.filter(ca => ca.id !== id)
    },

    // Customer Satisfaction
    addCustomerSatisfaction(satisfaction: CustomerSatisfaction) {
      this.customerSatisfaction.push(satisfaction)
    },
    updateCustomerSatisfaction(id: string, satisfaction: CustomerSatisfaction) {
      const index = this.customerSatisfaction.findIndex(cs => cs.id === id)
      if (index !== -1) {
        this.customerSatisfaction[index] = satisfaction
      }
    },
    deleteCustomerSatisfaction(id: string) {
      this.customerSatisfaction = this.customerSatisfaction.filter(cs => cs.id !== id)
    },

    // Improvement Initiatives
    addImprovementInitiative(initiative: ImprovementInitiative) {
      this.improvementInitiatives.push(initiative)
    },
    updateImprovementInitiative(id: string, initiative: ImprovementInitiative) {
      const index = this.improvementInitiatives.findIndex(ii => ii.id === id)
      if (index !== -1) {
        this.improvementInitiatives[index] = initiative
      }
    },
    deleteImprovementInitiative(id: string) {
      this.improvementInitiatives = this.improvementInitiatives.filter(ii => ii.id !== id)
    }
  }
})