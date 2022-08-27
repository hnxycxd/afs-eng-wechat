// 数字
export const number = /^[0-9]*$/
// 验证码(6位数字)
export const verityCodeReg = /^\d{6}$/
// 手机
export const mobileReg = /^1[0-9]{10}$/
// 邮箱
export const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
// 身份证
export const IDCardReg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/
// 电话
export const telReg = /^([0-9]{3,4}-)?[0-9]{7,8}$/
// url
export const urlReg = /^http[s]?:\/\/.*/
// 中文姓名(2-4个字)
export const nameReg = /^[\u4E00-\u9FA5]{2,4}$/
// 字母(含大小写)
export const alphabetsReg = /^[A-Za-z]+$/
// 小写字母
export const lowerCaseReg = /^[a-z]+$/
// 大写字母
export const upperCaseReg = /^[A-Z]+$/
