import request from '@/api/request'

interface loginReq {
  username: string
  idCard: string
  tel: string
  verityCode: string
}
export interface loginRes {
  accountName?: string
  tenantId?: string
  access_token: string
  certNo: string
}

export const login = (params: loginReq) => {
  return request<loginRes>({
    url: 'local/wechat/login',
    params,
    loading: true,
  })
}
