# Waterfall 瀑布流

## 基本使用

:::demo
waterfall/basic
:::

## 自定义

当传入 `column` 属性时，`Waterfall` 会渲染固定列数，默认根据宽度自动列数。

当页面有多个 `Waterfall` 组件时，请使用 `id` 属性来区分。

:::demo
waterfall/custom
:::

## API

### Switch Props

| 名称         | 类型    | 说明         | 默认      |
| ------------ | ------- | ------------ | --------- |
| v-model      | Array   | 组件数据     | []        |
| id           | string  | 组件唯一标识 | waterfall |
| column       | number  | 渲染列数     | 0         |
| gap          | number  | 列之间的间隔 | 14        |
| loadingLabel | string  | 加载中标签   | 加载中    |
| noMoreLabel  | string  | 加载完毕标签 | - END -   |
| hasMore      | boolean | 是否还有更多 | true      |

### Slot

| 名称 | 说明     |
| ---- | -------- |
| -    | 内容区域 |

### Switch Events

| 名称     | 说明         | 类型       |
| -------- | ------------ | ---------- |
| loadMore | 加载更多事件 | () => void |
