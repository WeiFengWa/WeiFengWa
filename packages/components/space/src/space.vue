<template>
  <div
    :class="[
      bem.b(),
      bem.is('vertical', props.vertical),
      bem.is('nowrap', props.nowrap),
      bem.is('fill', props.fill),
      bem.m(props.align)
    ]"
    :style="style"
  >
    <div :class="[bem.e('container')]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@weifengwa/utils/bem'
import { spaceProps } from './space'
import '@weifengwa/styles/src/space.css'
import { computed } from 'vue'

defineOptions({
  name: 'WfSpace'
})
const bem = createNameSpace('space')
const props = defineProps(spaceProps)
const style = computed(() => {
  if (!props.gap && props.gap !== 0) return {}
  return {
    '--gap': props.gap.toString().endsWith('px') ? props.gap : props.gap + 'px'
  }
})
</script>
