<template>
  <button
    :class="[
      bem.b(),
      bem.is('checked', open),
      bem.is('disabled', props.disabled)
    ]"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <span ref="dotRef" :class="bem.e('dot')"></span>
  </button>
</template>

<script setup lang="ts">
import { createNameSpace } from '@weifengwa/utils/bem'
import '@weifengwa/styles/src/switch.css'
import { nextTick, ref } from 'vue'
import { switchEmits, switchProps } from './switch'
defineOptions({
  name: 'WfSwitch'
})

const bem = createNameSpace('switch')
const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const open = defineModel({ type: Boolean, default: false })
const dotRef = ref<HTMLSpanElement>()

const handleClick = async () => {
  if (!dotRef.value) return
  dotRef.value.style.animationName = open.value ? 'close' : 'open'
  emit('change', !open.value)
  open.value = !open.value
}
</script>
