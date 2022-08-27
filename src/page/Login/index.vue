<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'vant'
import type { loginParams } from './data'
import { loginList } from './data'
import { login } from '@/api/login'
import logo from '@/assets/img/logo-low.png'
import { useAppStore } from '@/store/app'

const router = useRouter()
const appStore = useAppStore()
const loading = ref(false)
const loginEl = ref<FormInstance>()
const loginInfo = reactive<loginParams>({
  username: '',
  idCard: '',
  tel: '',
  verityCode: '',
})

const getSmsCode = async () => {
  // console.log('loginEl', loginEl.value)
  // const validateTel = await loginEl.value?.validate(['tel'])

  loginEl.value?.validate('tel').then((res) => {
    console.log('res', res)
  }).catch((...err) => {
    console.log('err', err)
  })

  // console.log('🚀 ~ file: index.vue ~ line 19 ~ getSmsCode ~ validateTel', validateTel)
  console.log('go on')
}

const onSubmit = () => {
  if (loginInfo.verityCode === '111111') {
    loading.value = true

    login(loginInfo).then((res) => {
      appStore.login(res.data)
      router.push({ name: 'bindCard' })
    }).finally(() => {
      loading.value = false
    })
  }
}
</script>

<template>
  <div class="h-full">
    <div class="my-14 flex h-28 justify-center">
      <img :src="logo" alt="logo" class="h-full">
    </div>

    <main>
      <van-form ref="loginEl" @submit="onSubmit">
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
              <van-button size="small" type="primary" round @click="getSmsCode">
                发送验证码
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
