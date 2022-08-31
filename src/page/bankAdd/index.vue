<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { bankAddInfo } from './data'
import { bankAddList, bankList } from './data'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
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

const onConfirmBank = (value: any) => {
  const bankName = value.selectedOptions?.[0]?.text
  bankAddState.bankName = bankName
  showPicker.value = false
}

const getSmsCode = () => {}

const onSubmit = () => {
  console.log('submit', bankAddState)
}
</script>

<template>
  <div class="pt-16">
    <div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-for="({ key, title, type, rules, maxlength, isLink }) in bankAddList"
            :key="key"
            v-model="bankAddState[key]"
            label-width="100"
            name="item.key"
            :label="title"
            :type="type"
            :rules="rules"
            :is-link="isLink"
            :maxlength="maxlength"
            :placeholder="`请输入${title}`"
            @click="onFormItemClick(key)"
          >
            <template v-if="key === 'verityCode'" #button>
              <van-button size="small" type="primary" round @click="getSmsCode">
                获取验证码
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
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- <van-button @click="appStore.logout">
      clear
    </van-button> -->
    <!-- <van-button @click="logStore">
      log store
    </van-button> -->
  </div>
</template>
