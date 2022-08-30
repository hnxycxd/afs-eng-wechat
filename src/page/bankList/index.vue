<script setup lang="ts">
import { bankStyle } from './data'
</script>

<template>
  <div>
    <div class="mx-4 mt-16">
      <div
        v-for="item in bankStyle"
        :key="item.icon"
        :style="{ backgroundColor: item.themeColor }"
        class="h-28 px-4 py-2"
      >
        <span
          :class="`iconfont icon-${item.icon}`"
          class="text-white"
          :style="{ fontSize: item.fontSize }"
        />
      </div>
      <icon-bank-jiaotongBank style="fontSize: 22px" />
    </div>
  </div>
</template>
