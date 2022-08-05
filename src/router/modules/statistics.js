import Layout from '@/layout'
export default {
  path: '/statistics',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/statistics'),
      meta: { title: '对账统计', icon: 'statistics' }
    }
  ]
}
