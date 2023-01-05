<template>
  <div class="main">
    <div class="main-layout">
      <el-container>
        <el-aside :width="isCollapse ? '60px' : '200px'">
          <mainMenu :isCollapse="isCollapse" />
        </el-aside>
        <el-container>
          <el-header><mainNav @clickmenu="clickmenu" /></el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import mainNav from '@/components/mainNav'
import mainMenu from '@/components/mainMenu'
export default defineComponent({
  components: {
    mainNav,
    mainMenu
  },
  setup() {
    const isCollapse = ref(false)
    //接受子组件传过来的参数
    const clickmenu = function (isOpen: boolean) {
      //把isCollapse的值再传递给子组件 main-menu
      isCollapse.value = isOpen
    }
    return { isCollapse, clickmenu }
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
