<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
// import { getDemo } from '@/api/home/index'
import useCountStore from '@/store/count'
// import Input from '@/components/input/input.vue'
import routeData from '@/router/data'

const countStore = useCountStore()
// const router = useRouter()

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
    <li v-for="item in routeData" :key="item.name" class="mx-4 my-2">
      <RouterLink :to="item.path">
        {{ item?.meta?.title }}
      </RouterLink>
    </li>
  </ul>
</template>
