import nongyeyinhang from '@/assets/img/svg/nongyeyinhang.svg'
import jiaotongyinhang from '@/assets/img/svg/jiaotongyinhang.svg'

interface IBankStyle {
  icon: string
  themeColor: string
  fontSize?: string
}
export const bankStyle: IBankStyle[] = [
  {
    // icon: nongyeyinhang,
    icon: 'yinhanglogo-1',
    themeColor: '#319c8b',
    fontSize: '34px',
  },
  {
    // icon: jiaotongyinhang,
    icon: 'yinhanglogo-',
    themeColor: '#00377a',
    fontSize: '30px',
  },
]
