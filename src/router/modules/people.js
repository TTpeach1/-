import Layout from '@/layout'
export default {
  path: '/people',
  component: Layout,
  meta: { title: '人员管理', icon: 'people' },
  children: [
    {
      path: 'peoplelist',
      component: () => import('@/views/people/peoplelist'),
      meta: { title: '人员列表', icon: 'people' }
    },
    {
      path: 'efficiency',
      component: () => import('@/views/people/efficiency'),
      meta: { title: '人效统计', icon: 'people' }
    },
    {
      path: 'worklist',
      component: () => import('@/views/people/worklist'),
      meta: { title: '工作量列表', icon: 'people' }
    }
  ]
}
