import Layout from '@/layout'
export default {
  path: '/workorder',
  component: Layout,
  meta: { title: '工单管理', icon: 'workorder' },
  children: [
    {
      path: 'operation',
      component: () => import('@/views/workorder/operation'),
      meta: { title: '运营工单', icon: 'workorder' }
    },
    {
      path: 'maintenance',
      component: () => import('@/views/workorder/maintenance'),
      meta: { title: '运维工单', icon: 'workorder' }
    }
  ]
}
// export default {
//   path: '/workorder',
//   component: Layout,
//   children: [
//     {
//       path: '',
//       component: () => import('@/views/workorder'),
//       meta: { title: '工单管理', icon: 'workorder' },
//       children: [
//         {
//           path: 'operation',
//           component: () => import('@/views/workorder/operation/index.vue'),
//           meta: { title: '运营工单', icon: 'workorder' }
//         },
//         {
//           path: 'maintenance',
//           component: () => import('@/views/workorder/maintenance/index.vue'),
//           meta: { title: '运维工单', icon: 'workorder' }
//         }
//       ]
//     }
//   ]
// }

