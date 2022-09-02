import { ref } from 'vue'

/**
 * @description: 倒计时
 * 开始计时 setCounter(60)
 * 清除计时 setCounter(0)
 */
export const useCountDown = () => {
  let timeHandle: number

  const counter = ref(0)
  const cancelTimeHandle = () => {
    window.clearTimeout(timeHandle)
    counter.value = 0
  }

  const setCounter = (count: number) => {
    cancelTimeHandle()
    if (!count)
      return

    counter.value = count
    timeHandle = window.setInterval(() => {
      counter.value--
      if (counter.value <= 0)
        cancelTimeHandle()
    }, 1000)
  }

  return {
    counter,
    setCounter,
  }
}
