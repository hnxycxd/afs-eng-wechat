import nongyeBank from '~icons/svg/nongye-bank'
import jiaotongBank from '~icons/svg/jiaotong-bank'
import jiansheBank from '~icons/svg/jianshe-bank'

interface IBankStyle {
  icon: string
  themeColor: string
  name: string
}
export const bankBaseInfo: IBankStyle[] = [
  {
    icon: nongyeBank,
    themeColor: '#319c8b',
    name: '中国农业银行',
  },
  {
    icon: jiaotongBank,
    themeColor: '#00377a',
    name: '中国交通银行',
  },
  {
    icon: jiansheBank,
    themeColor: '#0066b3',
    name: '中国建设银行',
  },
]

export const bankCodeMap: Record<string, IBankStyle> = {
  105: {
    icon: jiansheBank,
    themeColor: '#0066b3',
    name: '中国建设银行',
  },
  103: {
    icon: nongyeBank,
    themeColor: '#319c8b',
    name: '中国农业银行',
  },
}
