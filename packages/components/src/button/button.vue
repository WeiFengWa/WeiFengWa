<template>
  <button
    :class="[
      bem.b(),
      bem.m(buttonType),
      bem.is('circle', circle),
      bem.is('round', round),
      bem.is('square', square),
      bem.is('disabled', disabled || loadedState === 'loading')
    ]"
    :disabled="disabled || loadedState === 'loading'"
    @click="handleClick"
  >
    <!-- 前置插槽 -->
    <slot name="before">
      <wf-icon
        v-if="iconName"
        :class="{ 'animate-spin': loadedState === 'loading' }"
        :name="iconName"
      />
    </slot>
    <!-- link型按钮 -->
    <template v-if="type === buttonTypes[7] && link">
      <a :href="link" target="_blank" rel="noopener noreferrer">
        <slot></slot>
      </a>
    </template>
    <!-- 默认按钮 -->
    <slot v-else></slot>
    <!-- 后置插槽 -->
    <slot name="after">
      <wf-icon
        v-if="rightIcon"
        :class="{ 'animate-spin': loadedState === 'loading' }"
        :name="rightIcon"
      />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { createNameSpace } from '@weifengwa/utils/src/bem'
import {
  buttonLoadingTypes,
  buttonProps,
  buttonTypes,
  buttonEmits
} from './button'
import WfIcon from '../icon'
import '@weifengwa/styles/src/button.css'

defineOptions({
  name: 'WfButton'
})

const bem = createNameSpace('button')

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const buttonType = computed(() => {
  if (props.type) return props.type
  switch (props.loadingType) {
    case buttonLoadingTypes[1]:
      return buttonTypes[3]
    case buttonLoadingTypes[2]:
      return buttonTypes[2]
    case buttonLoadingTypes[3]:
      return buttonTypes[4]
    default:
      return props.type
  }
})

const loadedState = computed(() => {
  switch (props.loadingType) {
    case buttonLoadingTypes[0]:
      return ''
    case buttonLoadingTypes[1]:
      return 'loading'
    case buttonLoadingTypes[2]:
      return 'success'
    case buttonLoadingTypes[3]:
      return 'failure'
    default:
      return props.loading ? 'loading' : ''
  }
})

const iconName = computed(() => {
  if (props.loading && !props.icon) return 'iconamoon:restart'
  switch (props.loadingType) {
    case buttonLoadingTypes[1]:
    case buttonLoadingTypes[3]:
      return 'iconamoon:restart'
    case buttonLoadingTypes[2]:
      return 'iconamoon:check-circle-1'
    default:
      return props.icon
  }
})

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>
