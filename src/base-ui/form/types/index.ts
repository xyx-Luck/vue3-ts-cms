type IFormType = 'input' | 'select' | 'password' | 'datapick'
//定义接口
export interface IFormItem {
  type: IFormType
  label: string
  placeholder?: string
  options?: any[]
  otheroptions?: any
}

export interface IForm {
  formData: IFormItem[]
  labelWidth?: string
  itemStyle: any
  colLayOut: any
}
