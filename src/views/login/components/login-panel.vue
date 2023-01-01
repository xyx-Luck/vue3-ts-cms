<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch class="demo-tabs" v-model="currentTab">
      <el-tab-pane name="accountTab">
        <template #label>
          <span class="custom-tabs-label">
            <span>账号登陆</span>
          </span>
        </template>
        <loginAccount ref="loginAcc" />
      </el-tab-pane>
      <el-tab-pane name="phoneTab">
        <template #label>
          <span class="custom-tabs-label">
            <span>手机登陆</span>
          </span>
        </template>
        <loginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="checkPassword">
      <el-checkbox v-model="isChecked" label="记住密码" size="large" />
      <!-- <el-button type="" text>忘记密码</el-button> -->
      <el-button type="text">忘记密码</el-button>
    </div>
    <el-button type="primary" @click="login">登陆</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
export default defineComponent({
  components: { loginAccount, loginPhone },
  setup() {
    const isChecked = ref(true)
    const currentTab = ref('accountTab')
    //获取账号登陆的组件(为了获取里面的登陆事件)
    const loginAcc = ref<InstanceType<typeof loginAccount>>()
    //登陆的逻辑
    const login = () => {
      if (currentTab.value === 'accountTab') {
        console.log('账号登陆')
        loginAcc.value?.submitAccountForm(isChecked.value)
      } else {
        console.log('手机登陆')
      }
    }
    return { isChecked, login, loginAcc, currentTab }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-top: -200px;
  h1 {
    text-align: center;
  }
  .checkPassword {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
  }
  .el-button {
    width: 100%;
  }
}
</style>
