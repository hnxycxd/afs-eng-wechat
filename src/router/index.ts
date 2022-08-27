import { createRouter, createWebHistory } from 'vue-router'
import routes from './data'
import { useAppStore } from '@/store/app'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let title = to.meta?.title
  const appStore = useAppStore()

  if (to.meta.requireAuth) {
    if (appStore.access_token) {
      next()
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
      title = '登陆'
    }
  }
  else {
    next()
  }

  if (title)
    document.title = title as string
})

export default router
