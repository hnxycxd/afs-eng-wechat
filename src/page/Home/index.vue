<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { size } from 'lodash'
import { getDemo } from '@/api/home/index'
import useCountStore from '@/store/count'
import Input from '@/components/input/input.vue'

const countStore = useCountStore()
const router = useRouter()
const val = ref('')

console.log('obj size', size({ name: 'zs', age: 11, addr: 'sh' }))

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
      <router-link to="/bankList">
        我的银行卡
      </router-link>
    </li>
  </ul>
  <div>
    <Input v-model="val" label="文本1" placeholder="请输入吧">
      <template #icon>
        <carbon-add-alt class=" text-2xl text-blue-500" />
        <!-- <carbon-4k /> -->
      </template>
    </Input>
  </div>
</template>

<style scoped></style>
