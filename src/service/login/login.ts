import hyRequest from '../index'
import { IAccount, ILoginResult, IDataType } from './types'
//登陆接口
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: '/login',
    data: account
  })
}

//用户信息接口
export function requestUserInfo(id: number) {
  return hyRequest.get<IDataType>({
    url: '/users/' + id,
    data: id
  })
}
//请求用户菜单
export function requestUserMenuById(id: number) {
  return hyRequest.get<IDataType>({
    url: '/role/' + id + '/menu',
    data: id
  })
}
