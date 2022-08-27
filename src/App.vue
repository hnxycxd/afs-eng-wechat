<script setup lang="ts">
import themeVars from '@/constant/themeVars'
</script>

<template>
  <van-config-provider :theme-vars="themeVars" class="h-full">
    <router-view />
  </van-config-provider>
</template>
