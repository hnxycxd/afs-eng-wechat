<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { getDemo } from '@/api/home/index'
import useCountStore from '@/store/count'

const countStore = useCountStore()
const router = useRouter()

onMounted(() => {
  // getDemo({ addr: 'sh' }).then((res) => {
  //   console.log('getDemo/res', res)
  // }).catch((err) => {
  //   console.log('getDemo/err', err)
  // })
})
</script>

<template>
  <div>count: {{ countStore.count }}</div>
  <van-button type="primary" @click="countStore.setCount()">
    +1
  </van-button>

  <ul class="mt-6 text-blue-600">
    <li>
      <router-link to="/bindCard">
        去绑卡
      </router-link>
    </li>
  </ul>
</template>

<style scoped></style>
