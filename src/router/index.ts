import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      redirect: '/overview'
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('@/views/overview/index.vue')
    },
    {
      path: '/localfile',
      name: 'localfile',
      component: () => import('@/views/localfile/index.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/article/index.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/gallery/index.vue')
    },
    {
      path: '/diary',
      name: 'diary',
      component: () => import('@/views/diary/index.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/setting/index.vue')
    }
  ]
})

export default router
