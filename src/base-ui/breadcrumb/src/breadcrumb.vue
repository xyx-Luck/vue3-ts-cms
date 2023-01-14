<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="bread in breadcrumbData" :key="bread.name">
        <el-breadcrumb-item :to="{ path: bread.path }">
          {{ bread.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Ibreadcrumb } from '@/base-ui/breadcrumb/types/index'
export default defineComponent({
  props: {
    breadcrumbData: {
      type: Array as PropType<Ibreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 15px;
}
</style>
