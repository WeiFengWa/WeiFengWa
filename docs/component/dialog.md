# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

**功能: 脱拽、全屏**

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo
dialog/basic
:::

## 插槽

通过具名插槽 `header`、`default` 和 `footer` 可以自定义对话框的头部、内容和底部区域。

:::demo
dialog/slot
:::

## 属性

| 参数       | 说明              | 类型              | 默认值   |
| ---------- | ----------------- | ----------------- | -------- |
| v-model    | Dialog 绑定值     | `boolean`         | `false`  |
| title      | Dialog 的标题     | `string`          | `''`     |
| width      | Dialog 的宽度     | `string` `number` | `'50%'`  |
| top        | Dialog 的顶部距离 | `string`          | `'15vh'` |
| fullscreen | 是否全屏显示      | `boolean`         | `false`  |

## 事件

| 事件名 | 说明              | 类型       |
| ------ | ----------------- | ---------- |
| close  | Dialog 关闭的回调 | () => void |
