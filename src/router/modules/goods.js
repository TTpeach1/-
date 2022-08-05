import Layout from '@/layout'
export default {
  path: '/goods',
  component: Layout,
  meta: { title: '商品管理', icon: 'goods' },
  children: [
    {
      path: 'goodstyle',
      component: () => import('@/views/goods/goodstyle'),
      meta: { title: '商品类型', icon: 'goods' }
    },
    {
      path: 'goodmanage',
      component: () => import('@/views/goods/goodmanage'),
      meta: { title: '商品管理', icon: 'goods' }
    }
  ]
}
