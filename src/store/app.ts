import { defineStore } from 'pinia'
import router from '@/router'
import { getStorage, removeStorage, setStorage } from '@/utils'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    tenantId: 'system',
    access_token: getStorage({ key: 'access_token' }) || '',
  }),
  actions: {
    login(state: any) {
      this.$patch(state)
      setStorage({ key: 'access_token', value: state.access_token })
    },
    logout() {
      this.clearAppStore()
      router.push({ name: 'login' })
    },
    clearAppStore() {
      this.access_token = ''
      removeStorage({ key: 'access_token' })
    },
  },
})
