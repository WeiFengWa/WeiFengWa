<template>
  <div :class="bem.b('group')">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@weifengwa/utils/bem'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'WfButtonGroup'
})

defineProps(buttonGroupProps)
const bem = createNameSpace('button')
</script>
