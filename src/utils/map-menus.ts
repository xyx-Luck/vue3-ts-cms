import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
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
        //当路径是/main，会出现空白页
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

//定义一个方法，获取当前点击菜单的id
export function getCurrentClickPath(userMenu: any[], currentpath: any): any {
  //遍历userMenu
  for (const menu of userMenu) {
    if (menu.type === 1) {
      console.log(11)
      const findMenu = getCurrentClickPath(menu.children ?? [], currentpath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentpath) {
      //不等于1就获取
      //把menu返回
      return menu
    }
  }
}

//定义一个方法，动态加载面包屑导航
export function getCurrentBreadCrumb(userMenu: any[], currentpath: any): any {
  const breadBox = []
  for (const menu of userMenu) {
    if (menu.type === 1) {
      const findmenu = getCurrentBreadCrumb(menu.children ?? [], currentpath)
      console.log('findmenu', findmenu)
      if (findmenu.url === currentpath) {
        breadBox.push({ path: currentpath, name: findmenu.name })
        //把当前点击的上一级名称也加入
        breadBox.push({ path: menu.url, name: menu.name })
      }
      console.log('breadBox', breadBox)
      return breadBox
    } else {
      return menu
    }
  }
}

export { firstMenu }
