<script setup lang="ts">
import { onUnmounted, reactive, ref } from 'vue'
import type { FormInstance } from 'vant'
import type { bankAddInfo } from './data'
import { bankAddList, bankList } from './data'
import { useAppStore } from '@/store/app'
// import { wxSDK } from '@/utils'
import { useCountDown } from '@/hooks'

const { counter, setCounter } = useCountDown()
const appStore = useAppStore()
const bankAddRef = ref<FormInstance>()
const bankAddState = reactive<bankAddInfo>({
  username: '',
  idCard: '',
  tel: '',
  verityCode: '',
  bankName: '',
  bankCardNo: '',
})
const showPicker = ref(false)

const onFormItemClick = (key :(keyof bankAddInfo)) => {
  if (key === 'bankName')
    showPicker.value = true
}

// 所属银行
const onConfirmBank = (value: any) => {
  const bankName = value.selectedOptions?.[0]?.text
  bankAddState.bankName = bankName
  showPicker.value = false
}

// 获取验证码
const getSmsCode = () => {
  bankAddRef.value?.validate('tel').then(() => {
    Promise.resolve().then(() => {
      setCounter(60)
    })
  }).catch((err) => {
    console.log('error', err)
  })
}

// 提交
const onSubmit = () => {
  console.log('submit', bankAddState)
  setCounter(0)
}

onUnmounted(() => setCounter(0))
</script>

<template>
  <div class="pt-16">
    <div>
      <van-form ref="bankAddRef" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-for="({ key, title, type, rules, maxlength, isLink }) in bankAddList"
            :key="key"
            v-model="bankAddState[key]"
            label-width="100"
            :name="key"
            :label="title"
            :type="type"
            :rules="rules"
            :is-link="isLink"
            :maxlength="maxlength"
            :placeholder="`请输入${title}`"
            @click="onFormItemClick(key)"
          >
            <template v-if="key === 'verityCode'" #button>
              <van-button
                round
                size="small"
                class="w-[100px]"
                type="primary"
                :disabled="!!counter"
                @click="getSmsCode"
              >
                {{ counter ? `${counter}s` : '获取验证码' }}
              </van-button>
            </template>
          </van-field>

          <van-popup v-model:show="showPicker" position="bottom">
            <van-picker
              :columns="bankList"
              @confirm="onConfirmBank"
              @cancel="showPicker = false"
            />
          </van-popup>
        </van-cell-group>
        <div class="m-4">
          <van-button round block type="primary" native-type="submit">
            确认授权
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
