import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // require.context()方法
  // 作用：创建当前模块的上下文
  // 用法：require.context(directory, flag, regExp)
  // directory: 要导入的当前模块的文件夹目录
  // flag: 是否搜索当前路径的子目录
  // regExp: 要匹配的文件
  //   1.resolve() :它返回请求被解析后得到的模块 id
  // 2.keys(): 返回当前所有搜索到的文件的数组
  // 3.id: 上下文模块里面所包含的模块 id
  const routeFiles = require.context('../router/main', true, /\.ts/)
  //拼接路由
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  //使用递归方式
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
