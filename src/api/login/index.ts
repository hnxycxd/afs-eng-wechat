import request from '@/api/request'

interface loginReq {
  username: string
  idCard: string
  tel: string
  verityCode: string
}
interface loginRes {
  access_token: string
}

export const login = (params: loginReq) => {
  return request<loginRes>({
    url: '/wechat/login',
    params,
    loading: true,
  })
}
