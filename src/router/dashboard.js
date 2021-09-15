import baseLayout from '@/views/layout/index.vue'

const dashboard = {
  path: 'dashboard',
  name: 'Dashboard',
  component: () => import('@/views/dashboard/index.vue'),
  meta: {
    requiresAuth: true,
    baseRouteName: 'dashboard',
  },
}

const route = {
  path: '/',
  component: baseLayout,
  children: [dashboard],
}

export default route
