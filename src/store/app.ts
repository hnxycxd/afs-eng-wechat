import { defineStore } from 'pinia'
import router from '@/router'
import type { loginRes } from '@/api/login'

export const useAppStore = defineStore({
  id: 'app',
  state: (): loginRes => ({
    accountName: '小明',
    tenantId: 'system',
    access_token: 'eyJraWQiOiI2OTU4YWFhYTliZDA1YTIxZjVmNmZiZTFkNDBmZjY3YyIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJ4aWFvbWluZyIsImF1ZCI6InBjIiwibmJmIjoxNjY2MjQyMzExLCJzY29wZSI6WyJzZXJ2ZXIiLCJub3Bhc3MiXSwiZXhwIjoxNjY2MjQ1OTExLCJpYXQiOjE2NjYyNDIzMTEsImp0aSI6IjEwYThmYjJkLTkyYjEtNDk0YS1iNjk4LTczMzhkMWU0NmZkOSJ9.ZNA8jCYFMmh5XX2hzuXLE4oYptS47cvr0QEID-2728TdrKw5FScglu1x5Ormf1v3F_Vxn4lBzEipFpBZs05P_56UrrKF23cZbnT6pkPLYduYZUjPYE-9EbwyhNcbNb4z-4F5GZEL30fo5gZeH0V_KDusKVEIj-IgLc8wvP9tJrJcSEmUbOFAf_O7xNKTiqo1Zk7AL6AT7G-zDm9wD02IfkHGqvN5_TU7FNZI2LPowsgC8lW7gmYZxcMGK4bjLLo1WfvVm_K-u0c5Yixs63gFvdPoagYtuNtP7M2KdmHEMc_PzsaDzXfea8MKE-nubriaZGPIuEoMN5JauUIcEtK56w',
    certNo: '342601197702037892',
  }),
  actions: {
    login(loginData: loginRes) {
      this.$patch(loginData)
    },
    logout() {
      this.clearAppStore()
      router.push({ name: 'login' })
    },
    clearAppStore() {
      this.access_token = ''
      localStorage.clear()
    },
  },
  persist: true,
})
