<template>
  <div class="mainMenu">
    <!-- logo -->
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span>Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      :unique-opened="true"
      router
    >
      <template v-for="menu in userMenus" :key="menu.id">
        <template v-if="menu.type === 1">
          <el-submenu index="1">
            <template #title>
              <i v-if="menu.icon" :class="menu.icon"></i>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="submenu in menu.children" :key="submenu.id">
              <el-menu-item index="1-1">
                <i v-if="submenu.icon" :class="submenu.icon"></i>
                <span>{{ submenu.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>{{ menu.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
// import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenu)
    return { userMenus }
  }
})
</script>

<style scoped lang="less">
.logo {
  text-align: center;
  padding: 15px 0;
  img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 15px;
  }
  span {
    font-weight: bold;
    font-size: 18px;
    color: #fff;
  }
}
</style>
