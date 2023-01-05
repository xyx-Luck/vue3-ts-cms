<template>
  <div class="loginAccount">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import LocalCache from '../../../utils/catch'

// import hyRequest from '../../../service'
export default defineComponent({
  setup() {
    const ruleForm = reactive({
      name: 'coderwhy',
      password: '123456'
    })

    const store = useStore()
    const ruleFormRef = ref<InstanceType<typeof ElForm>>()
    // 表单验证
    const rules = reactive({
      name: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        },
        { min: 6, max: 8, message: '账号的长度应该是6-8位', trigger: 'blur' }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        { min: 6, max: 8, message: '密码的长度应该是6-8位', trigger: 'blur' }
      ]
    })
    //登陆逻辑
    const submitAccountForm = (ischecked: boolean) => {
      ruleFormRef.value?.validate((valid) => {
        // eslint-disable-next-line no-empty
        if (valid) {
          //判断记住密码是否被勾选
          if (ischecked) {
            //把用户名  密码保存到本地
            LocalCache.setCatch('name', ruleForm.name)
            LocalCache.setCatch('password', ruleForm.password)
          } else {
            LocalCache.deleteCatch('name')
            LocalCache.deleteCatch('password')
          }
          //调用登陆的action
          store.dispatch('login/accountLoginAction', { ...ruleForm })
        } else {
          console.log('error submit!')
        }
      })
    }

    return { ruleForm, rules, submitAccountForm, ruleFormRef, store }
  }
})
</script>

<style scoped></style>
