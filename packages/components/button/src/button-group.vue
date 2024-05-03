<template>
  <div
    :class="[
      bem.b('group'),
      bem.is('circle', circle),
      bem.is('round', round),
      bem.is('square', square)
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@weifengwa/utils/bem'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'WfButtonGroup'
})

const props = defineProps(buttonGroupProps)
const bem = createNameSpace('button')
</script>
