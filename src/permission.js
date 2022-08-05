// 权限拦截 导航守卫 路由守卫  router
import router from '@/router' // 引入路由实例
import store from '@/store' // 引入vuex store实例

//定义白名单
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  //首先判断token
  if (store.state.user.token) {
    //判断是否去login
    //获取数据
    store.dispatch('user/getUserInfo')
    // to.path === '/login' ? next('/') : next()
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    whiteList.includes(to.path) ? next() : next('/login')
  }
})
