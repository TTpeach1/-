import Layout from '@/layout'
export default {
  path: '/address',
  component: Layout,
  meta: { title: '点位管理', icon: 'address' },
  children: [
    {
      path: 'area',
      component: () => import('@/views/address/area'),
      meta: { title: '区域管理', icon: 'address' }
    },
    {
      path: 'addre',
      component: () => import('@/views/address/addre'),
      meta: { title: '点位管理', icon: 'address' }
    },
    {
      path: 'commercial',
      component: () => import('@/views/address/commercial'),
      meta: { title: '合作商管理', icon: 'address' }
    }
  ]
}
