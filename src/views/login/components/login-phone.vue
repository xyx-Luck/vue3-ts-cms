<template>
  <div class="loginPhone">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" />
      </el-form-item>
      <div class="getcode">
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" />
        </el-form-item>
        <el-button type="primary" size="small">获取验证码</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive } from 'vue'
// import type { FormRules } from 'element-plus'
export default defineComponent({
  setup() {
    const ruleForm = reactive({
      phone: '',
      code: ''
    })
    const rules = reactive({
      phone: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        {
          pattern: /^1[356789]\d{9}$/,
          message: '请确保手机号格式正确',
          trigger: 'blur'
        }
      ],
      code: [
        {
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        },
        { min: 4, max: 6, message: '验证码的长度应该是4-6位', trigger: 'blur' }
      ]
    })
    return { ruleForm, rules }
  }
})
</script>

<style scoped lang="less">
.loginPhone {
  .getcode {
    display: flex;
    justify-content: space-around;
    .el-button {
      // width: 48%;
      height: 40px;
    }
  }
}
</style>
