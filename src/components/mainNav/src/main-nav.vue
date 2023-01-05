<template>
  <div class="main-nav">
    <i
      :class="isOpen ? 'el-icon-open' : 'el-icon-turn-off'"
      @click="handlemenu"
    ></i>
    daohang
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineEmits } from 'vue'

export default defineComponent({
  emits: ['clickmenu'],
  setup(props, ctx) {
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
    return { isOpen, handlemenu }
  }
})
</script>

<style scoped lang="less">
.main-nav {
  height: 60px;
  line-height: 60px;
  i {
    font-size: 30px;
    color: skyblue;
    vertical-align: middle;
  }
}
</style>
