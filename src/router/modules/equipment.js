import Layout from '@/layout'
export default {
  path: '/equipment',
  component: Layout,
  meta: { title: '设备管理', icon: 'equipment' },
  children: [
    {
      path: 'equip',
      component: () => import('@/views/equipment/equip'),
      meta: { title: '设备管理', icon: 'equipment' }
    },
    {
      path:'state',
      component: () => import('@/views/equipment/state'),
      meta: { title: '设备状态',icon: 'equipment' }
    },
    {
      path:'style',
      component: () => import('@/views/equipment/style'),
      meta: { title: '设备类型管理',icon: 'equipment' }
    }
  ]
}
