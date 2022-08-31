<script setup lang="ts">
import { isEmpty } from 'lodash-es'
import { useRouter } from 'vue-router'
import { bankBaseInfo } from './data'

const router = useRouter()
</script>

<template>
  <div>
    <div class="mx-4 pt-16">
      <div
        v-for="item in bankBaseInfo"
        :key="item.icon"
        :style="{ backgroundColor: item.themeColor }"
        class="h-28 px-6 py-4"
      >
        <component :is="item.icon" class="inline-block h-8 w-8 text-white" />
        <span class="ml-2 text-white">{{ item.name }}</span>
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
