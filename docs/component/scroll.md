# Scroll 滚动条

## 基本使用

默认 `vertical` 滚动

<wf-scroll>
  <div style="height: 300px;width: 200px;background:red;">div1</div>
  <div style="height: 300px;width: 300px;background:blue;">div2</div>
  <div style="height: 300px;width: 200px;background:red;">div1</div>
</wf-scroll>

```vue
<template>
  <wf-scroll>
    <div style="height: 300px;width: 200px;background:red;">div1</div>
    <div style="height: 300px;width: 300px;background:blue;">div2</div>
    <div style="height: 300px;width: 200px;background:red;">div1</div>
  </wf-scroll>
</template>
```

## 水平滚动

`horizontal` 属性

<wf-scroll horizontal>
  <div style="height: 150px;width: 200px;background:red;">div1</div>
  <div style="height: 250px;width: 300px;background:blue;">div2</div>
  <div style="height: 150px;width: 100px;background:red;">div3</div>
  <div style="height: 50px;width: 2000px;background:green;">div3</div>
</wf-scroll>

```vue
<template>
  <wf-scroll horizontal>
    <div style="height: 150px;width: 200px;background:red;">div1</div>
    <div style="height: 250px;width: 300px;background:blue;">div2</div>
    <div style="height: 150px;width: 100px;background:red;">div3</div>
    <div style="height: 50px;width: 2000px;background:green;">div3</div>
  </wf-scroll>
</template>
```

## 隐藏滑块

`hidden` 属性

<wf-scroll hidden>
  <div style="height: 150px;width: 200px;background:red;">div1</div>
  <div style="height: 250px;width: 300px;background:blue;">div2</div>
  <div style="height: 150px;width: 100px;background:red;">div3</div>
  <div style="height: 50px;width: 2000px;background:green;">div3</div>
</wf-scroll>

```vue
<template>
  <wf-scroll hidden>
    <div style="height: 150px;width: 200px;background:red;">div1</div>
    <div style="height: 250px;width: 300px;background:blue;">div2</div>
    <div style="height: 150px;width: 100px;background:red;">div3</div>
    <div style="height: 50px;width: 2000px;background:green;">div3</div>
  </wf-scroll>
</template>
```

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
