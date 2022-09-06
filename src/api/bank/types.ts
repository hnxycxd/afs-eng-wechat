// 绑卡标识：签约、放款、贷后、微信服务号
type bindSource = 'SIGN_APPLY' | 'LOAN_APPLY' | 'LOAN_AFTER' | 'WE_CHAT'
// 绑卡渠道
type bindChannel = 'MI' | 'ABC' | 'CICC'
// 绑卡类型：新增、重新绑定
type operationType = 'ADD' | 'RE_BIND'

// 绑卡列表
export interface signListType {
  accountName?: string
  certNo: string
  pageNum: number
  pageSize: number
}
export interface signListItem {
  accountName: string
  accountNo: string
  bankBranch: string
  bankCode: string
  bankPhone: string
  bindChannel: bindChannel
  bindSource: bindSource
  certNo: string
  id: string
  signStatus: 'alreadySign' | 'notSign'
}
export interface signListRes {
  data: signListItem[]
  pageNum: number
  pageSize: number
  totalPages: number
  totalSize: number
}

// 发送验证码
export interface sendSmsCodeReq {
  accountName: string
  accountNo: string
  bankPhone: string
  bindSource: bindSource
  certNo: string
  operationType: operationType
}
export interface sendSmsCodeRes {
  bindChannel: bindChannel
  cardLogId: string
  requestNo: string
  success: boolean
  transNo: string
}

// 提交
export type bindVerifyReq = Partial<sendSmsCodeReq & sendSmsCodeRes>
