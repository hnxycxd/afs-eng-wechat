import nongyeBank from '~icons/svg/nongye-bank'
import jiaotongBank from '~icons/svg/jiaotong-bank'

interface IBankStyle {
  icon: string
  themeColor: string
  fontSize?: string
  name?: string
}
export const bankBaseInfo: IBankStyle[] = [
  {
    icon: nongyeBank,
    themeColor: '#319c8b',
    fontSize: '34px',
    name: '中国农业银行',
  },
  {
    icon: jiaotongBank,
    themeColor: '#00377a',
    fontSize: '30px',
    name: '中国交通银行',
  },
]
