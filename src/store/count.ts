import { defineStore } from 'pinia'

const useCountStore = defineStore('count', {
  state: () => ({
    count: 0,
  }),
  actions: {
    setCount() {
      this.count++
    },
  },
})

export default useCountStore
