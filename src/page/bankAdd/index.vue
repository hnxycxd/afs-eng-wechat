<script setup lang="ts">
import { onUnmounted, reactive, ref } from 'vue'
import { showToast } from 'vant'
import type { FormInstance } from 'vant'
import { useRouter } from 'vue-router'
import type { bankAddInfo } from './data'
import { bankAddList, bankList } from './data'
// import type { sendSmsCodeReq } from '@/api/bank/types'
import { useAppStore } from '@/store/app'
// import { wxSDK } from '@/utils'
import { useCountDown } from '@/hooks'
import { bindVerify, getSignBankByAccountNo, sendSmsCode } from '@/api/bank'

const { counter, setCounter } = useCountDown()
const appStore = useAppStore()
const router = useRouter()
const bankAddRef = ref<FormInstance>()
const smsResponse = ref()
const smsLoading = ref<boolean>()
const submitLoading = ref<boolean>()
const bankAddState = reactive<bankAddInfo>({
  accountName: appStore.accountName,
  certNo: appStore.certNo,
  bankPhone: '',
  smsCode: '',
  bankBranch: '',
  accountNo: '',

  bankCode: '',
  bankName: '',
})

// 获取验证码
const getSmsCode = () => {
  bankAddRef.value?.validate('bankPhone').then(() => {
    smsLoading.value = true
    sendSmsCode({
      ...bankAddState,
      bindSource: 'WE_CHAT',
      operationType: 'ADD',
    })
      .then((res) => {
        showToast('发送成功')
        smsResponse.value = res.data
        setCounter(60)
      })
      .catch(() => {
        showToast('发送失败')
      })
      .finally(() => smsLoading.value = false)
  })
    .catch((err) => {
      console.log('error', err)
    })
}

// 银行卡号失焦
const getBankType = (type: string) => {
  if (type === 'accountNo' && bankAddState.accountNo.trim()) {
    getSignBankByAccountNo({ accountNo: bankAddState.accountNo }).then((res) => {
      const { bankTypeCode, bankTypeName } = res.data || {}
      bankAddState.bankBranch = bankTypeName

      bankAddState.bankCode = bankTypeCode
      bankAddState.bankName = bankTypeName
    })
  }
}

// 提交
const onSubmit = () => {
  submitLoading.value = true
  console.log('submit', bankAddState)
  bindVerify({
    ...bankAddState,
    ...smsResponse.value,
  }).then(() => {
    setCounter(0)
    router.push({ name: 'bankList' })
  }).finally(() => submitLoading.value = false)
}

onUnmounted(() => setCounter(0))
</script>

<template>
  <div class="pt-16">
    <div>
      <van-form ref="bankAddRef" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-for="({ key, title, type, rules, maxlength, isLink, disabled, noPlaceholder, readonly }) in bankAddList"
            :key="key"
            v-model="bankAddState[key]"
            label-width="100"
            :name="key"
            :label="title"
            :type="type"
            :rules="rules"
            :is-link="isLink"
            :disabled="disabled"
            :readonly="readonly"
            :maxlength="maxlength"
            :placeholder="noPlaceholder ? undefined : `请输入${title}`"
            @blur="getBankType(key)"
          >
            <template v-if="key === 'smsCode'" #button>
              <van-button
                round
                size="small"
                class="w-[100px]"
                type="primary"
                :loading="smsLoading"
                :disabled="!!counter"
                @click="getSmsCode"
              >
                {{ counter ? `${counter}s` : '获取验证码' }}
              </van-button>
            </template>
          </van-field>
        </van-cell-group>
        <div class="m-4">
          <van-button round block type="primary" native-type="submit" :loading="submitLoading">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
