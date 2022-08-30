import type { FieldRule, FieldType } from 'vant'
import { IDCardReg, mobileReg, verityCodeReg } from '@/utils'

export interface loginParams {
  username: string
  idCard: string
  tel: string
  verityCode: string
}

interface loginParamsList {
  key: keyof loginParams
  type?: FieldType
  title: string
  maxlength?: number
  rules?: FieldRule[]
}

export const loginList: loginParamsList[] = [
  {
    key: 'username',
    title: '姓名',
    maxlength: 10,
  },
  {
    key: 'idCard',
    title: '证件号码',
    maxlength: 18,
    rules: [{ pattern: IDCardReg, message: '证件号码输入有误', trigger: 'onBlur' }],
  },
  {
    key: 'tel',
    title: '手机号',
    type: 'tel',
    maxlength: 11,
    rules: [
      { required: true, message: '请输入手机号', trigger: 'onChange' },
      { pattern: mobileReg, message: '手机号输入有误', trigger: 'onBlur' },
    ],
  },
  {
    key: 'verityCode',
    title: '验证码',
    maxlength: 6,
    type: 'number',
    rules: [{ pattern: verityCodeReg, message: '验证码不正确' }],
  },
]
