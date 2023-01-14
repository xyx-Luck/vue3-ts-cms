<template>
  <div>
    <el-form>
      <el-row>
        <el-col
          :span="8"
          v-for="item in formData"
          :key="item.label"
          v-bind="colLayOut"
        >
          <el-form-item
            :label="item.label"
            :label-width="labelWidth"
            :style="itemStyle"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input :placeholder="item.placeholder"></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select :placeholder="item.placeholder" style="width: 100%">
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template>
            <!-- 用v-bind绑定其他属性 -->
            <template v-else-if="item.type === 'datapick'">
              <el-date-picker
                type="date"
                :placeholder="item.placeholder"
                style="width: 100%"
                v-bind="item.otherOptions"
              />
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types/index'
export default defineComponent({
  props: {
    formData: {
      type: Array as PropType<IFormItem[]>,
      default: () => [] //数组和对象的默认值要写成箭头函数
      // 的格式，其他简单数据类型直接写值就可以
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
      // default: () => ({ padding: '10px 40px' })
    },
    colLayOut: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.el-form {
  background: #fff;
}
</style>

function setup(): any { throw new Error('Function not implemented.') }
