import { createStore } from 'vuex'
import user from './modules/user'
import menu from './modules/menu'

export default createStore({
  getters: {
    token: (state) => state.user.token,
    userinfo: (state) => state.user.userinfo,
    menus: (state) => state.user.userinfo.menus,
    isCollapse: (state) => state.menu.isCollapse
  },
  modules: {
    user,
    menu
  }
})
