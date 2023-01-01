export interface IAccount {
  name: string
  password: string
}

//定义登陆接口的类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}

//所有接口返回结果的类型，因为所有接口返回的data中的数据都不相同，
// 所以给data定义一个泛型T，并给一个默认值any类型
export interface IDataType<T = any> {
  code: number
  data: T
}
