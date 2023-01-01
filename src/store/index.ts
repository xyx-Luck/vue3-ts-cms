import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 1
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
//解决vuex刷新页面数据丢失问题
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
