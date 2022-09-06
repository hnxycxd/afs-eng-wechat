import { defineStore } from 'pinia'
import router from '@/router'
import type { loginRes } from '@/api/login'

export const useAppStore = defineStore({
  id: 'app',
  state: (): loginRes => ({
    accountName: '',
    tenantId: 'system',
    access_token: '',
    certNo: '',
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
