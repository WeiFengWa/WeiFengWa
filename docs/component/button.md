# Button 按钮

## 基本使用

支持 `default`、`primary`、`danger`、`success`、`warning`、`info`、 `text`、`link`、`dashed` 这好几种类型，默认为 `default`。

:::demo
button/basic
:::

## 图标

使用 `icon` or `rightIcon` 属性在按钮内嵌入一个图标。

:::demo
button/icon
:::

## 形状

共有 `default`、`round`、`circle`、`square` 四种形状，默认为 `default`。

:::demo
button/shape
:::

## 禁用状态

使用 `disabled` 属性禁用按钮

:::demo
button/disabled
:::

## 加载状态

使用 `loading` or `loadingType` 属性快速设置加载状态、Icon 等属性

`loadingType` 属性有 `default`、`loading`、`success`、`failure` 四种状态，默认为 `default`

:::demo
button/loading
:::

## 插槽

`before` 前置插槽， `after` 后置插槽

:::demo
button/slot
:::

## 按钮组

:::demo
button/group
:::

## API

### Button Props

| 名称        | 类型                                                                            | 说明       |
| ----------- | ------------------------------------------------------------------------------- | ---------- |
| type        | `default` `primary` `success` `danger` `warning` `info` `text` `link` `dashed ` | 按钮类型   |
| round       | boolean                                                                         | 是否弧形   |
| circle      | boolean                                                                         | 是否圆形   |
| square      | boolean                                                                         | 是否方形   |
| disabled    | boolean                                                                         | 是否禁用   |
| icon        | string                                                                          | 左图标     |
| rightIcon   | string                                                                          | 右图标     |
| link        | string                                                                          | 按钮链接   |
| loading     | boolean                                                                         | 是否加载中 |
| loadingType | `default` `loading` `success` `failure`                                         | 加载状态   |

### Slot

| 名称    | 说明     |
| ------- | -------- |
| default | 默认内容 |
