<template>
  <i :class="bem.b()">
    <slot>
      <Icon
        :style="style"
        :width="size"
        :height="size"
        :color="color"
        :icon="name || ''"
      />
    </slot>
  </i>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { iconProps } from './icon'
import { createNameSpace } from '@weifengwa/utils/src/bem'
import '@weifengwa/styles/src/icon.css'

defineOptions({
  name: 'WfIcon'
})

const bem = createNameSpace('icon')
const props = defineProps(iconProps)

const style = computed(() => {
  if (!props.size && !props.color) return {}
  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.size ? { width: props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {})
  }
})
</script>
