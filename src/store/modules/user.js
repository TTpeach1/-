// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'

// const getDefaultState = () => {
//   return {
//     token: getToken(),
//     name: '',
//     avatar: ''
//   }
// }

// const state = getDefaultState()

// const mutations = {
//   RESET_STATE: (state) => {
//     Object.assign(state, getDefaultState())
//   },
//   SET_TOKEN: (state, token) => {
//     state.token = token
//   },
//   SET_NAME: (state, name) => {
//     state.name = name
//   },
//   SET_AVATAR: (state, avatar) => {
//     state.avatar = avatar
//   }
// }

// const actions = {
//   // user login
//   login({ commit }, userInfo) {
//     const { username, password } = userInfo
//     return new Promise((resolve, reject) => {
//       login({ username: username.trim(), password: password })
//         .then((response) => {
//           const { data } = response
//           commit('SET_TOKEN', data.token)
//           setToken(data.token)
//           resolve()
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },

//   // get user info
//   getInfo({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       getInfo(state.token)
//         .then((response) => {
//           const { data } = response

//           if (!data) {
//             return reject('Verification failed, please Login again.')
//           }

//           const { name, avatar } = data

//           commit('SET_NAME', name)
//           commit('SET_AVATAR', avatar)
//           resolve(data)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },

//   // user logout
//   logout({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       logout(state.token)
//         .then(() => {
//           removeToken() // must remove  token  first
//           resetRouter()
//           commit('RESET_STATE')
//           resolve()
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },

//   // remove token
//   resetToken({ commit }) {
//     return new Promise((resolve) => {
//       removeToken() // must remove  token  first
//       commit('RESET_STATE')
//       resolve()
//     })
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }
//
// import { setToken, getToken, removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'
import { onLoginApi, getUserInfoApi } from '@/api'
export default {
  namespaced: true,
  state: {
    userName: Cookies.get('user_name'),
    userId: Cookies.get('user_id'),
    token: Cookies.get('token'),
    userInfo: {}
  },
  mutations: {
    setToken(state, payload) {
      state.userName = payload.data.userName
      Cookies.set('user_name', payload.data.userName)
      state.userId = payload.data.userId
      Cookies.set('user_id', payload.data.userId)
      state.token = payload.data.token
      // console.log(state.token);
      Cookies.set('token', payload.data.token)
    },
    setUserInfo(state, payload) {
      state.userInfo = payload.data
    },
    delToken(state, payload) {
      state.token = payload
      Cookies.set('token', payload)
    },
    delUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    //获取token
    async getToken(context, data) {
      const res = await onLoginApi(data)
      console.log(res, '登陆数据')
      context.commit('setToken', res)
      //token存在发送时间戳到cookies
      Cookies.set('tokenTime', Date.now())
    },
    //获取用户信息
    async getUserInfo(context) {
      const res = await getUserInfoApi(Cookies.get('user_id'))
      console.log(res, '用户数据')
      context.commit('setUserInfo', res)
    },
    //退出页面，清除token
    logout(context){
      context.commit('delToken','')
      context.commit('delUserInfo',{})
    }
  }
}
