import { createMemoryHistory, createRouter } from 'vue-router'

const routes: any = [
  { path: '/', redirect: '/overview' },
  {
    path: '/overview',
    name: 'overview',
    component: () => import('@/views/overview/index.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
