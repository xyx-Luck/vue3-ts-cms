<template>
  <div class="user">
    <h1>用户管理</h1>
    <XyxForm v-bind="searchFormData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XyxForm from '@/base-ui/form'
import { searchFormData } from './config/search.config'

export default defineComponent({
  components: { XyxForm },
  name: 'user',
  setup() {
    return { searchFormData }
  }
})
</script>

<style scoped></style>
