<template>
  <div class="mainMenu">
    <!-- logo -->
    <div class="logo">
      <!-- <i class="el-icon-plus"></i> -->
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse">Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      :unique-opened="true"
      :collapse="isCollapse"
      router
    >
      <template v-for="menu in userMenus" :key="menu.id">
        <template v-if="menu.type === 1">
          <el-submenu :index="menu.id + ''">
            <template #title>
              <i v-if="menu.icon" :class="menu.icon"></i>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="submenu in menu.children" :key="submenu.id">
              <el-menu-item
                :index="submenu.id + ''"
                @click="loadSubmenuPage(submenu)"
              >
                <i v-if="submenu.icon" :class="submenu.icon"></i>
                <span>{{ submenu.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="submenu.id + ''">
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
import { useRouter } from 'vue-router'
import { computed, defineComponent } from 'vue'
// import { useStore } from '@/store'
export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenus = computed(() => store.state.login.userMenu)
    const loadSubmenuPage = (submenu: any) => {
      console.log('.................')
      //页面跳转
      router.push({
        path: submenu.url
      })
    }
    return { userMenus, loadSubmenuPage }
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
//解决折叠后有一条竖线
.el-menu {
  border-right: none;
}
</style>
