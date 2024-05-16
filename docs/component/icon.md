# Icon 图标

WeiFeng 推荐使用 [iconify](https://iconify.design) 作为图标库。

```sh
pnpm install --save-dev @iconify/vue
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<wf-icon name="iconamoon:certificate-badge-duotone"/>
<wf-icon name="iconamoon:certificate-badge-duotone" color="red"/>
<wf-icon name="iconamoon:check-circle-1" />
<wf-icon name="iconamoon:check-circle-1" :size="40" color="skyblue" />
<wf-icon size="40">✌️</wf-icon>

```vue
<template>
  <wf-icon name="iconamoon:certificate-badge-duotone" />
  <wf-icon name="iconamoon:certificate-badge-duotone" color="red" />
  <wf-icon name="iconamoon:check-circle-1" />
  <wf-icon name="iconamoon:check-circle-1" :size="40" color="skyblue" />
  <wf-icon size="40">✌️</wf-icon>
</template>
```

## API

### Icon Props

| 名称  | 类型             | 默认值 | 说明     |
| ----- | ---------------- | ------ | -------- |
| name  | string           |        | 图标名称 |
| color | string           |        | 图标颜色 |
| size  | number \| string |        | 图标大小 |

### Icon Slot

| 名称    | 说明     |
| ------- | -------- |
| default | 默认内容 |
