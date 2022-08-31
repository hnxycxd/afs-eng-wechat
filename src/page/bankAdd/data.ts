import type { FieldRule, FieldType } from 'vant'
import { IDCardReg, mobileReg, numberReg, verityCodeReg } from '@/utils'

export interface bankAddInfo {
  username: string
  idCard: string
  tel: string
  verityCode: string
  bankName: string
  bankCardNo: string
}

interface bankAddParams {
  key: keyof bankAddInfo
  type?: FieldType
  title: string
  maxlength?: number
  isLink?: boolean
  rules?: FieldRule[]
}

export const bankAddList: bankAddParams[] = [
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
    key: 'bankName',
    title: '所属银行',
    isLink: true,
    rules: [
      { required: true, message: '请选择银行', trigger: 'onChange' },
    ],
  },
  {
    key: 'bankCardNo',
    title: '银行卡号',
    maxlength: 19,
    rules: [
      { required: true, message: '请输入银行卡号', trigger: 'onChange' },
      { pattern: numberReg, message: '银行卡号输入有误', trigger: 'onBlur' },
    ],
  },
  {
    key: 'tel',
    title: '银行预留手机号',
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

export const bankList = [
  { text: '农业银行', value: 'nongye' },
  { text: '交通银行', value: 'jiaotong' },
  { text: '工商银行', value: 'icbc' },
]
