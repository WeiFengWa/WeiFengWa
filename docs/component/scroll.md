# Scroll 滚动条

## 基本使用

默认垂直滚动，添加 `horizontal` 属性即可水平滚动

:::demo
scroll/basic
:::

## 隐藏滑块

`hidden` 属性

:::demo
scroll/hidden
:::

## API

### Scroll Props

| 名称       | 类型             | 说明                 | 默认  |
| ---------- | ---------------- | -------------------- | ----- |
| width      | string \| number | 宽度                 | 100%  |
| height     | string \| number | 高度                 | 300px |
| hidden     | boolean          | 隐藏滑块             |       |
| max        | number           | 滑块最大高度（宽度） | 100   |
| min        | number           | 滑块最小高度（宽度） | 50    |
| hover      | string           | 滑块 hover 状态颜色  |       |
| active     | string           | 滑块 active 状态颜色 |       |
| horizontal | boolean          | 水平滚动             |       |

### Slot

| 名称    | 说明     |
| ------- | -------- |
| default | 默认内容 |

<script setup lang="ts">
import { ref } from 'vue'
const horizontal = ref(false)
</script>
