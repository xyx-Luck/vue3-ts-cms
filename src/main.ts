import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo'
// import hyRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'
import * as ElIcons from '@element-plus/icons-vue'
const app = createApp(App)
const win: any = window
if (process.env.NODE_ENV === 'development') {
  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
  }
}
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name])
}
// 注册element-plus/其他
app.use(globalRegister)
setupStore()
app.use(router)

app.use(store)

app.mount('#app')

// console.log(VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   headers: {},
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       config.headers['token'] = '123'
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// hyRequest
//   .request({
//     url: '/login',
//     method: 'POST',
//     data: { name: 'coderwhy', password: 123456 }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })

// hyRequest.get()
