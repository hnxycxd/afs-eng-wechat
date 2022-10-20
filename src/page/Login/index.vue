<script setup lang="ts">
import { onUnmounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { showToast } from 'vant'
import type { FormInstance } from 'vant'
import type { loginParams } from './data'
import { loginList } from './data'
import { login } from '@/api/login'
import logo from '@/assets/img/logo-low.png'
import { useAppStore } from '@/store/app'
import { useCountDown } from '@/hooks'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const { counter, setCounter } = useCountDown()
const loading = ref(false)
const loginRef = ref<FormInstance>()
const loginInfo = reactive<loginParams>({
  username: '',
  idCard: '',
  tel: '',
  verityCode: '',
})

// 发送验证码
const getSmsCode = async () => {
  loginRef.value?.validate('tel').then((res) => {
    showToast({ message: '服务号未提供短信、登陆接口' })
    setCounter(60)
  }).catch((err) => {
    console.log('error', err)
  })
}

// 提交
const onSubmit = () => {
  loading.value = true
  login(loginInfo).then((res) => {
    appStore.login(res.data)

    const redirect = route.query.redirect as string || '/'
    if (redirect)
      router.push(redirect)
  }).finally(() => {
    loading.value = false
  })
}

onUnmounted(() => setCounter(0))
</script>

<template>
  <div class="h-full">
    <div class="my-14 flex h-28 justify-center">
      <img :src="logo" alt="logo" class="h-full">
    </div>

    <main>
      <van-form ref="loginRef" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-for="({ key, title, type, maxlength, rules }) in loginList"
            :key="key"
            v-model="loginInfo[key]"
            label-width="60"
            :name="key"
            :label="title"
            :type="type"
            :rules="rules"
            :maxlength="maxlength"
            :placeholder="`请输入${title}`"
          >
            <template v-if="key === 'verityCode'" #button>
              <van-button
                round
                size="small"
                type="primary"
                class="w-[100px]"
                :disabled="!!counter"
                @click="getSmsCode"
              >
                {{ counter ? `${counter}s` : '获取验证码' }}
              </van-button>
            </template>
          </van-field>
        </van-cell-group>

        <div style="margin: 16px">
          <van-button
            round block
            type="primary"
            native-type="submit"
            :loading="loading"
          >
            确定
          </van-button>
        </div>
      </van-form>
    </main>
  </div>
</template>
