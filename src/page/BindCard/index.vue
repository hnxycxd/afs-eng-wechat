<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const logStore = () => {
  console.log('appSore', appStore)
}
</script>

<template>
  <div>
    bindcard
    <van-button @click="appStore.logout">
      clear
    </van-button>
    <van-button @click="logStore">
      log store
    </van-button>
  </div>
</template>
