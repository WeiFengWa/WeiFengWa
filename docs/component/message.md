# Message 消息

## 基本使用

:::demo
message/basic
:::

## 通知类型

:::demo
message/notification
:::

## 自定义 `label` 和 `value`

:::demo
switch/label
:::

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

| 名称   | 说明     | 类型                                  |
| ------ | -------- | ------------------------------------- |
| change | 改变事件 | (string \| boolean \| number) => void |
