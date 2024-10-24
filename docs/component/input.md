# Input 输入框

## 基础使用

- 共有三种输入框类型：默认 `text`、密码框 `password`、文本域 `textarea`

:::demo
input/basic
:::

## 自定义使用

- 可通过 `prefix-icon` 和 `suffix-icon` 属性来添加前后图标
- 可通过 `clearable` 属性来添加清空按钮
- 可通过 `disabled` 属性来禁用输入框
- 可通过 `readonly` 属性来设置只读状态
- 可通过 `max` 属性来控制内容长度

:::demo
input/custom
:::

## 插槽使用

- `prepend` 和 `append` 插槽可以自定义前后内容

:::demo
input/slot
:::

## API

### Icon Props

| 名称        | 类型             | 默认值     | 说明         |
| ----------- | ---------------- | ---------- | ------------ |
| v-model     | string \| number |            | 绑定值       |
| name        | string           |            | 名称         |
| placeholder | string           | 请输入内容 | 提示文本     |
| password    | boolean          |            | 是否为密码框 |
| textarea    | boolean          |            | 是否为文本域 |
| clearable   | boolean          |            | 是否可清空   |
| disabled    | boolean          |            | 是否禁用     |
| readonly    | boolean          |            | 是否只读     |
| max         | number           |            | 最大长度     |
| prefix-icon | string           |            | 前置图标     |
| suffix-icon | string           |            | 后置图标     |

### Input Props

| 名称        | 类型   | 默认值 | 说明       |
| ----------- | ------ | ------ | ---------- |
| type        | string | text   | 输入框类型 |
| placeholder | string |        | 占位符     |

### Icon Slot

| 名称    | 说明     |
| ------- | -------- |
| prepend | 前置内容 |
| append  | 后置内容 |

### 事件

| 事件名 | 说明               | 类型             |
| ------ | ------------------ | ---------------- |
| change | 输入框内容改变回调 | (string) => void |
