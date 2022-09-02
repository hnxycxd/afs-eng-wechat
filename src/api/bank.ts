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
export function signList(params: Record<string, any>) {
  return request({
    url: '/apply/cust/bankcard/signList',
    data: params,
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
// 发送短信验证码
export function sendSmsCode(params: Record<string, any>) {
  return request({
    url: 'apply/cust/bankcard/sendSmsCode',
    data: params,
    method: 'post',
  })
}

// 验证
export function bindVerify(params: Record<string, any>) {
  return request({
    url: 'apply/cust/bankcard/bindVerify',
    data: params,
    method: 'post',
  })
}
