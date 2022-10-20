import nongyeBank from '~icons/svg/nongye-bank'
// import jiaotongBank from '~icons/svg/jiaotong-bank'
import jiansheBank from '~icons/svg/jianshe-bank'
import pufaBank from '~icons/svg/pufa-bank'

interface IBankStyle {
  icon: string
  themeColor: string
  name: string
}

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
  310: {
    icon: pufaBank,
    themeColor: '#000073',
    name: '浦发银行',
  },
}
