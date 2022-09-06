import type { bindVerifyReq, sendSmsCodeReq, sendSmsCodeRes, signListRes, signListType } from './types'
import request from '@/api/request'

// 绑卡 保存
export function engineeringBankSave(params: Record<string, any>) {
  return request({
    url: '/apply/engineeringBank/save',
    data: params,
    method: 'post',
  })
}

// 查 初始化信息
export function getOrderBankCard(applyNo: string) {
  return request({
    url: `/apply/engineeringBank/getOrderBankCard/${applyNo}`,
    method: 'get',
  })
}

// 绑卡列表
export function signList(params: signListType) {
  return request<signListRes>({
    url: 'apply/cust/bankcard/signList',
    data: params,
    loading: true,
    method: 'post',
  })
}

// 校验银行卡是否已解绑
export function checkUnBind(id: string) {
  return request({
    url: `/apply/cust/bankcard/checkUnBind/${id}`,
    method: 'get',
  })
}

// (最新) 根据银行卡号获取银行名称
interface getAccountNoReq {
  accountNo: string
}
interface getAccountNoRes {
  bankTypeCode: string
  bankTypeName: string
  bankTypeNo: string
  delFlag: string
  id: string
}
export const getSignBankByAccountNo = (params: getAccountNoReq) => {
  return request<getAccountNoRes>({
    url: 'apply/engineeringBank/getSignBankByAccountNo',
    params,
    method: 'get',
  })
}

// 发送短信验证码
export function sendSmsCode(params: sendSmsCodeReq) {
  return request<sendSmsCodeRes>({
    url: 'apply/cust/bankcard/sendSmsCode',
    data: params,
    method: 'post',
  })
}

// 验证
export function bindVerify(params: bindVerifyReq) {
  return request({
    url: 'apply/cust/bankcard/bindVerify',
    data: params,
    method: 'post',
  })
}
