<template>
  <div class="main">
    <div class="main-layout">
      <el-container>
        <el-aside width="200px"><mainMenu /></el-aside>
        <el-container>
          <el-header><mainNav /></el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import mainNav from '@/components/mainNav'
import mainMenu from '@/components/mainMenu'
export default defineComponent({
  components: {
    mainNav,
    mainMenu
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.main,
.main-layout,
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  background: rgba(0, 0, 0, 0.5);
}
.el-header {
  background: rgba(0, 0, 0, 0.7);
}
</style>
