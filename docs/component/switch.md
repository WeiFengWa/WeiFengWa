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

const handleChange = (val: string | boolean | number) => {
  console.log(val)
}
</script>
```

## 自定义颜色

<wf-switch dot-color="black" checked-color="red" unchecked-color="green" />

```vue
<template>
  <wf-switch dot-color="black" checked-color="red" unchecked-color="green" />
</template>
```

## 自定义值

<wf-switch v-model="value" checked-value="开" unchecked-value="关" @change="handleChange"/>

```vue
<template>
  <wf-switch
    v-model="value"
    checked-value="开"
    unchecked-value="关"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)

const handleChange = (val: string | boolean | number) => {
  console.log(val)
}
</script>
```

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)

const handleChange = (val: string | boolean | number) => {
  console.log(val)
}
</script>

## API

### Switch Props

| 名称           | 类型                        | 说明             | 默认  |
| -------------- | --------------------------- | ---------------- | ----- |
| disabled       | boolean                     | 是否禁用         | false |
| checkedColor   | string                      | 选中时背景颜色   |       |
| uncheckedColor | string                      | 未选中时背景颜色 |       |
| dotColor       | string                      | 圆点背景颜色     |       |
| checkedValue   | string \| boolean \| number | 选中时值         |       |
| uncheckedValue | string \| boolean \| number | 未选中时值       |       |

### Switch Events

| 名称   | 说明     | 参数                               |
| ------ | -------- | ---------------------------------- |
| change | 改变事件 | (string \| boolean \| number):void |
