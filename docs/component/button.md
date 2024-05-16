# Button 按钮

## 基本使用

支持 `default`、`primary`、`danger`、`success`、`warning`、`info`、 `text`、`link`、`dashed` 这好几种类型，默认为 `default`。

<wf-space>
  <wf-button>Default</wf-button>
  <wf-button type="primary">Primary</wf-button>
  <wf-button type="danger">danger</wf-button>
  <wf-button type="success">Success</wf-button>
  <wf-button type="warning">Warning</wf-button>
  <wf-button type="info">Info</wf-button>
  <wf-button type="text">Text</wf-button>
  <wf-button type="link" link="https://weifengwa.cn">Link</wf-button>
  <wf-button type="dashed">Dashed</wf-button>
</wf-space>

```vue
<template>
  <wf-button>Default</wf-button>
  <wf-button type="primary">Primary</wf-button>
  <wf-button type="danger">danger</wf-button>
  <wf-button type="success">Success</wf-button>
  <wf-button type="warning">Warning</wf-button>
  <wf-button type="info">Info</wf-button>
  <wf-button type="text">Text</wf-button>
  <wf-button type="link" link="https://weifengwa.cn">Link</wf-button>
  <wf-button type="dashed">Dashed</wf-button>
</template>
```

## 图标

使用 `icon` or `rightIcon` 属性在按钮内嵌入一个图标。

<wf-space>
  <wf-button type="primary" icon="iconamoon:check-circle-1" />
  <wf-button type="danger" icon="iconamoon:close-circle-1" />
  <wf-button type="success" icon="iconamoon:check-circle-1">
    我是一个按钮，But 我带了一个 Icon
  </wf-button>
  <wf-button type="primary" right-icon="iconamoon:check-circle-1">
    当然，你也可以将图标放到右边
  </wf-button>
</wf-space>

```vue
<template>
  <wf-button type="primary" icon="iconamoon:check-circle-1" />
  <wf-button type="danger" icon="iconamoon:close-circle-1" />
  <wf-button type="success" icon="iconamoon:check-circle-1">
    我是一个按钮，But 我带了一个 Icon
  </wf-button>
  <wf-button type="primary" right-icon="iconamoon:check-circle-1">
    当然，你也可以将图标放到右边
  </wf-button>
</template>
```

## 形状

共有 `default`、`round`、`circle`、`square` 四种形状，默认为 `default`。

<wf-space>
  <wf-button type="primary">Default</wf-button>
  <wf-button type="primary" round>Round</wf-button>
  <wf-button type="success" circle>
    <wf-icon name="iconamoon:check-circle-1" />
  </wf-button>
  <wf-button type="success" square>
    <wf-icon name="iconamoon:check-circle-1" />
  </wf-button>
  <wf-button type="danger" square> 但是呢 </wf-button>
  如果你的内容过多，效果正如你所见
</wf-space>

```vue
<template>
  <wf-button type="primary">Default</wf-button>
  <wf-button type="primary" round>Round</wf-button>
  <wf-button type="success" circle>
    <wf-icon name="iconamoon:check-circle-1" />
  </wf-button>
  <wf-button type="success" square>
    <wf-icon name="iconamoon:check-circle-1" />
  </wf-button>
  <wf-button type="danger" square> 但是呢 </wf-button>
  如果你的内容过多，效果正如你所见
</template>
```

## 禁用状态

使用 `disabled` 属性禁用按钮

<wf-space>
  <wf-button disabled>Default</wf-button>
  <wf-button type="danger" disabled circle>
    <wf-icon name="iconamoon:close-circle-1" />
  </wf-button>
</wf-space>

```vue
<template>
  <wf-button disabled>Default</wf-button>
  <wf-button type="danger" disabled circle>
    <wf-icon name="iconamoon:close-circle-1" />
  </wf-button>
</template>
```

## 加载状态

使用 `loading` or `loadingType` 属性快速设置加载状态、Icon 等属性

`loadingType` 属性有 `default`、`loading`、`success`、`failure` 四种状态，默认为 `default`

<wf-space>
  <wf-space>
    <wf-button
      :type="loading ? 'warning' : 'success'"
      :icon="loading ? 'iconamoon:restart' : 'iconamoon:check-circle-1'"
      :loading="loading"
      @click="startLoading"
      >{{ loading ? '正在加载' : '点我加载' }}
    </wf-button>
    <wf-button type="warning" icon="iconamoon:restart" loading
      >我还在加载 ...</wf-button
    >
    <wf-button type="success" icon="iconamoon:check-circle-1" :loading="false"
      >我加载完了</wf-button
    >
  </wf-space>
  <wf-space>
    <wf-button type="success" loadingType="default">默认加载状态</wf-button>
    <wf-button type="success" loadingType="loading">加载中状态</wf-button>
    <wf-button type="success" loadingType="success">加载成功状态</wf-button>
    <wf-button type="success" loadingType="failure">加载失败状态</wf-button>
  </wf-space>
</wf-space>

```vue
<template>
  <wf-button
    :type="loading ? 'warning' : 'success'"
    :icon="loading ? 'iconamoon:restart' : 'iconamoon:check-circle-1'"
    :loading="loading"
    @click="startLoading"
    >{{ loading ? '正在加载' : '点我加载' }}
  </wf-button>
  <wf-button type="warning" icon="iconamoon:restart" loading
    >我还在加载 ...</wf-button
  >
  <wf-button type="success" icon="iconamoon:check-circle-1" :loading="false"
    >我加载完了</wf-button
  >
  <wf-button type="success" loadingType="default">默认加载状态</wf-button>
  <wf-button type="success" loadingType="loading">加载中状态</wf-button>
  <wf-button type="success" loadingType="success">加载成功状态</wf-button>
  <wf-button type="success" loadingType="failure">加载失败状态</wf-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false)

function startLoading() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1500)
}
</script>
```

## 插槽

`before` 前置插槽

<wf-button type="success" round>
<template #before>
￥
</template>
200.00
</wf-button>

`after` 后置插槽

<wf-button type="success" round>
200.00
<template #after>
元/个
</template>
</wf-button>

```vue
<template>
  <!--前置插槽-->
  <wf-button type="success" round>
    <template #before> ￥ </template>
    200.00
  </wf-button>
  <!--后置插槽-->
  <wf-button type="success" round>
    200.00
    <template #after> 元/个 </template>
  </wf-button>
</template>
```

## 按钮组

<wf-space>
  <wf-button-group>
    <wf-button type="primary" icon="iconamoon:player-start-duotone" square/>
    <wf-button type="primary" icon="iconamoon:player-play-duotone" square disabled/>
    <wf-button type="primary" icon="iconamoon:player-end-duotone" square/>
  </wf-button-group>
  <wf-button-group circle>
    <wf-button icon="iconamoon:player-start-duotone" @click="test"/>
    <wf-button loading />
    <wf-button loading />
    <wf-button icon="iconamoon:player-end-duotone"/>
  </wf-button-group>
</wf-space>

```vue
<template>
  <wf-button-group>
    <wf-button type="primary" icon="iconamoon:player-start-duotone" square />
    <wf-button type="primary" icon="iconamoon:player-play-duotone" square />
    <wf-button type="primary" icon="iconamoon:player-end-duotone" square />
  </wf-button-group>
  <wf-button-group>
    <wf-button type="primary" icon="iconamoon:player-start-duotone" square />
    <wf-button type="primary" loading square />
    <wf-button type="primary" icon="iconamoon:player-end-duotone" square />
  </wf-button-group>
</template>
```

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

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false)


function startLoading() {
  loading.value = true
  console.log('开始加载')
  setTimeout(() => {
    loading.value = false
    console.log('加载结束')
  }, 1500)
}

const test = () => {
  console.log('test')
}
</script>
