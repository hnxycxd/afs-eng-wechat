import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/page/home/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/login/index.vue'),
    meta: {
      title: '登陆',
    },
  },
  {
    path: '/bankList',
    name: 'bankList',
    component: () => import('@/page/bankList/index.vue'),
    meta: {
      title: '我的银行卡',
      requireAuth: true,
    },
  },
  {
    path: '/bindCard',
    name: 'bindCard',
    component: () => import('@/page/bindCard/index.vue'),
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
