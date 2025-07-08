import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
      children: [
        {
          path: '/overview',
          name: 'overview',
          component: () => import('@/views/overview/index.vue')
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import('@/views/menu/index.vue')
        }
      ]
    }
  ]
})

export default router
