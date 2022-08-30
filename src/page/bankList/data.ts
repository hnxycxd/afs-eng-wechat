import nongyeyinhang from '@/assets/img/svg/nongyeyinhang.svg'
import jiaotongyinhang from '@/assets/img/svg/jiaotongyinhang.svg'

interface IBankStyle {
  icon: string
  themeColor: string
  fontSize?: string
}
export const bankStyle: IBankStyle[] = [
  {
    icon: nongyeyinhang,
    // icon: 'nongyeyinhang',
    themeColor: '#319c8b',
    fontSize: '34px',
  },
  {
    icon: jiaotongyinhang,
    // icon: 'jiaotongyinhang',
    themeColor: '#00377a',
    fontSize: '30px',
  },
]
