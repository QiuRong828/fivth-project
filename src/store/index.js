import { createStore } from 'vuex'
import user from './modules/user'

export default createStore({
  getters: {
    token: (state) => state.user.token,
    userinfo: (state) => state.user.userinfo
  },
  modules: {
    user
  }
})
