<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isEmpty } from 'lodash-es'
import { useRouter } from 'vue-router'
import { bankBaseInfo, bankCodeMap } from './data'
import { signList } from '@/api/bank'
import { useAppStore } from '@/store/app'
import type { signListItem } from '@/api/bank/types'

const router = useRouter()
const appStore = useAppStore()
const bankList = ref<signListItem[]>([])

onMounted(() => {
  signList({
    certNo: appStore.certNo,
    pageNum: 1,
    pageSize: 10,
  }).then((res) => {
    bankList.value = res.data.data
  })
})

console.log('bankList', bankList)
</script>

<template>
  <div>
    <div class="mx-4 h-5/6 pt-16">
      <div
        v-for="({ id, bankCode }) in bankList"
        :key="id"
        :style="{ backgroundColor: bankCodeMap[bankCode].themeColor }"
        class="mb-2 h-28 rounded-lg px-6 py-4 shadow-xl"
      >
        <component :is="bankCodeMap[bankCode].icon" class="inline-block h-8 w-8 text-white" />
        <span class="ml-2 text-white">{{ bankCodeMap[bankCode].name }}</span>
        <div class="mt-2 text-lg text-white">
          **** **** **** 1234
        </div>
      </div>

      <van-empty v-if="isEmpty(bankBaseInfo)" description="您还未绑定任何银行卡" />
    </div>
    <div class="mx-4 mt-10">
      <van-button type="primary" round block @click="router.push({ name: 'bankAdd' })">
        添加银行卡
      </van-button>
    </div>
  </div>
</template>
