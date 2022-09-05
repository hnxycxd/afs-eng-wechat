<script setup lang="ts">
import { useAttrs } from 'vue'
import type { FieldProps } from 'vant'

interface customInput extends Partial<FieldProps> {
  otherProps?: boolean
  iconName?: string
}

defineProps<customInput>()

const attrs = useAttrs()
</script>

<template>
  <div>
    <van-field v-bind="attrs" />
    <slot name="icon" />
  </div>
</template>
