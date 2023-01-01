<template>
  <div class="login"><loginPanel /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './components/login-panel.vue'
export default defineComponent({
  components: {
    loginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background: url(../../assets/img/bg.webp) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
