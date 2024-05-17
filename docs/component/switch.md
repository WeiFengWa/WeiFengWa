# Switch 开关

## 基本使用

<wf-switch v-model="value" @change="handleChange"/>

```vue
<template>
  <wf-switch v-model="value" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)

const handleChange = (val: boolean) => {
  console.log(val)
}
</script>
```

## API

### Switch Props

| 名称     | 类型    | 说明     | 默认  |
| -------- | ------- | -------- | ----- |
| disabled | boolean | 是否禁用 | false |

### Switch Events

| 名称   | 说明     | 类型              |
| ------ | -------- | ----------------- |
| change | 改变事件 | Function(boolean) |

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)

const handleChange = (val: boolean) => {
  console.log(val)
}
</script>
