<template>
  <div class="main-nav">
    <i
      :class="isOpen ? 'el-icon-open' : 'el-icon-turn-off'"
      @click="handlemenu"
    ></i>
    <!-- 面包屑 -->
    <XyxBreadcrumb :breadcrumbData="breadcrumbData" />
    daohang
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import XyxBreadcrumb from '@/base-ui/breadcrumb/index'
import { getCurrentBreadCrumb } from '@/utils/map-menus'
export default defineComponent({
  components: {
    XyxBreadcrumb
  },
  emits: ['clickmenu'],
  setup(props, ctx) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    //点击图标修改图标为不同形态
    const isOpen = ref(false)

    // 使用defineEmits创建名称，接受一个数组
    // const emit = defineEmits(['clickmenu'])
    const handlemenu = function () {
      // console.log(123)
      isOpen.value = !isOpen.value
      //传值给main组件
      ctx.emit('clickmenu', isOpen.value)
    }
    const breadcrumbData = computed(() => {
      //获取store中的usermenu
      const usermenus = store.state.login.userMenu
      console.log('usermenus', usermenus)
      //获取地址栏的路劲
      const currentPath = route.path
      console.log('currentPath', currentPath)
      return getCurrentBreadCrumb(usermenus, currentPath)
    })
    // const breadcrumbData = getCurrentBreadCrumb(usermenus, currentPath)
    return { isOpen, handlemenu, breadcrumbData }
  }
})
</script>

<style scoped lang="less">
.main-nav {
  display: flex;
  height: 60px;
  line-height: 60px;
  i {
    font-size: 30px;
    color: skyblue;
    margin-top: 15px;
  }
}
</style>
