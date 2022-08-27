<script setup lang="ts">
import { ref, useAttrs } from 'vue'
import type { FieldProps } from 'vant'

// const props = defineProps<{
//   placeholder: string
// }>()

const attrs = useAttrs()
console.log('🚀 ~ file: VantInput.vue ~ line 10 ~ attrs', attrs)

const value = ref('hh')
</script>

<template>
  <div>
    <van-field v-bind="attrs" />
  </div>
</template>
