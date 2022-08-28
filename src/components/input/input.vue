<script setup lang="ts">
import { useAttrs } from 'vue'
import type { FieldProps } from 'vant'

interface myInputType extends Partial<FieldProps> {
  otherProps?: boolean
  iconName?: string
}

defineProps<myInputType>()

const attrs = useAttrs()

console.log('attrs', attrs)
</script>

<template>
  <div>
    <van-field v-bind="attrs" />
    <slot name="icon" />
  </div>
</template>
