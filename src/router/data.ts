import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/page/Home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/Login/index.vue'),
    meta: {
      title: '登陆',
    },
  },
  {
    path: '/bindCard',
    name: 'bindCard',
    component: () => import('@/page/BindCard/index.vue'),
    meta: {
      title: '绑定银行卡',
      requireAuth: true,
    },
  },
  {
    path: '/:path(.*)+',
    name: 'notFound',
    redirect: {
      name: 'home',
    },
  },
]

export default routes
