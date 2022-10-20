import type { FieldProps } from 'vant'
import { IDCardReg, mobileReg, numberReg, verityCodeReg } from '@/utils'

export interface bankAddInfo {
  accountName: string
  certNo: string
  bankPhone: string
  smsCode: string
  bankBranch: string
  accountNo: string

  bankCode: string
  bankName: string
}

interface bankAddParams extends Partial<FieldProps> {
  key: keyof bankAddInfo
  noPlaceholder?: boolean
}

export const bankAddList: bankAddParams[] = [
  {
    key: 'accountName',
    title: '姓名',
    maxlength: 10,
    disabled: true,
  },
  {
    key: 'certNo',
    title: '证件号码',
    maxlength: 18,
    disabled: true,
    rules: [{ pattern: IDCardReg, message: '证件号码输入有误', trigger: 'onBlur' }],
  },
  {
    key: 'bankBranch',
    title: '所属银行',
    disabled: true,
    noPlaceholder: true,
  },
  {
    key: 'accountNo',
    title: '银行卡号',
    maxlength: 19,
    rules: [
      { required: true, message: '请输入银行卡号', trigger: 'onChange' },
      { pattern: numberReg, message: '银行卡号输入有误', trigger: 'onBlur' },
    ],
  },
  {
    key: 'bankPhone',
    title: '银行预留手机号',
    type: 'tel',
    maxlength: 11,
    rules: [
      { required: true, message: '请输入手机号', trigger: 'onChange' },
      { pattern: mobileReg, message: '手机号输入有误', trigger: 'onBlur' },
    ],
  },
  {
    key: 'smsCode',
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
