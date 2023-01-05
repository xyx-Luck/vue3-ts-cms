import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { mapMenusToRoutes } from '@/utils/map-menus'
import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfo,
  requestUserMenuById
} from '../../service/login/login'
// import { requestUserInfo } from '../../service/login/login'
import Localcatch from '../../utils/catch'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: []
    }
  },
  mutations: {
    //修改token
    changeToken(state, token: string) {
      state.token = token
    },
    //修改用户信息
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    //修改用户菜单
    changeUserMenu(state, userMenu: any) {
      state.userMenu = userMenu
      const routes = mapMenusToRoutes(userMenu)
      console.log('routes~~~~~~', routes)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      //1.获取用户token
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      Localcatch.setCatch('token', token)

      //2.获取用户信息
      const userInfoResult = await requestUserInfo(id)
      const userInfo = userInfoResult.data
      console.log(userInfo)
      commit('changeUserInfo', userInfo)
      Localcatch.setCatch('userInfo', userInfo)
      //3.获取用户角色的菜
      const userMenuInfo = await requestUserMenuById(userInfo.role.id)
      const userMenu = userMenuInfo.data
      commit('changeUserMenu', userMenu)
      Localcatch.setCatch('userMenu', userMenu)
      // console.log('userMenu', userMenuInfo)

      //跳转到首页
      router.push('./main')
    },
    loadLocalLogin({ commit }) {
      const token = Localcatch.getCatch('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = Localcatch.getCatch('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenu = Localcatch.getCatch('userMenu')
      if (userMenu) {
        commit('changeUserMenu', userMenu)
      }
    }
  }
}

export default loginModule
