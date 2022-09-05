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
  bindChannel: 'MI' | 'ABC' | 'CICC'
  bindSource: 'SIGN_APPLY' | 'LOAN_APPLY' | 'LOAN_AFTER' | 'WE_CHAT'
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
