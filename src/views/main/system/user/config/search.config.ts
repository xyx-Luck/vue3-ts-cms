import { IForm } from '@/base-ui/form/types/index'

export const searchFormData: IForm = {
  formData: [
    {
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择你喜欢的运动',
      options: [
        { label: '篮球', value: '篮球' },
        { label: '足球', value: '足球' },
        { label: '排球', value: '排球' }
      ]
    },
    {
      type: 'datapick',
      label: '创建时间',
      otheroptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  // 设置label的宽度
  labelWidth: '120px',
  itemStyle: 'padding:10px 40px',
  colLayOut: { xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }
}
