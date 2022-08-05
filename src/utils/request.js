// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store' // 引入vuex store实例
import Cookies from 'js-cookie'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5000 // 定义5秒超时
}) // 创建一个axios的实例
//声明函数tokenTime是否到期
const timeOut = () => {
  const currentTime = Date.now()
  const tokenTime = Cookies.get('tokenTime')
  const timeOut = 5 * 60 * 60 * 1000
  return currentTime - tokenTime > timeOut
}
service.interceptors.request.use(async (config) => {
  // console.log(config,store.state.user.token)
  if (store.state.user.token) {
    if (timeOut()) {
      await store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('登陆过期'))
    } else {
      config.headers.Authorization = store.state.user.token
    }
  }
  return config
}) // 请求拦截器
service.interceptors.response.use() // 响应拦截器
export default service // 导出axios实例
