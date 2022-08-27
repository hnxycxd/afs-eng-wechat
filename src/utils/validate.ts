import {
  IDCardReg,
  alphabetsReg,
  emailReg,
  lowerCaseReg,
  mobileReg,
  nameReg,
  telReg,
  upperCaseReg,
  urlReg,
} from './regExp'

const check = (reg: RegExp) => (val: string) => reg.test(val)

// 邮箱
export const isEmail = check(emailReg)
// 手机号码
export const isMobile = check(mobileReg)
// 身份证号码
export const isIDCard = check(IDCardReg)
// 电话号码
export const isTel = check(telReg)
// 中文姓名(2-4个字)
export const isName = check(nameReg)
// URL地址
export const isUrl = check(urlReg)
// 小写字母
export const isLowerCase = check(lowerCaseReg)
// 大写字母
export const isUpperCase = check(upperCaseReg)
// 字母(含大小写)
export const isAlphabets = check(alphabetsReg)
