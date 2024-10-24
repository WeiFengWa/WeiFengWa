<template>
  <div
    :class="[
      bem.b(),
      bem.is('checked', open),
      bem.is('disabled', props.disabled),
      bem.is('showLabel', props.showLabel),
      bem.is('showLabelRight', props.showLabelRight)
    ]"
    :style="switchStyle"
  >
    <span v-if="props.showLabel" :class="bem.e('label')">
      {{ open ? props.checkedLabel : props.uncheckedLabel }}
    </span>
    <button
      :class="bem.e('button')"
      :disabled="props.disabled"
      @click="handleClick"
    >
      <span ref="dotRef" :class="bem.e('dot')"></span>
    </button>
    <span v-if="props.showLabelRight" :class="bem.e('label')">
      {{ open ? props.checkedLabel : props.uncheckedLabel }}
    </span>
    <input :class="bem.e('input')" :name="name" :value="switchValue" />
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@weifengwa/utils/src/bem'
import '@weifengwa/styles/src/switch.css'
import { computed, ref, watch } from 'vue'
import { switchEmits, switchProps } from './switch'
import { isUndefined } from '@weifengwa/utils'
defineOptions({
  name: 'WfSwitch'
})

const bem = createNameSpace('switch')
const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const switchStyle = computed(() => {
  const style: { [key: string]: string } = {}
  if (props.checkedColor) style['--checked-color'] = props.checkedColor
  if (props.uncheckedColor) style['--unchecked-color'] = props.uncheckedColor
  if (props.dotColor) style['--dot-color'] = props.dotColor
  return style
})

const open = defineModel({ type: Boolean, default: false })
const dotRef = ref<HTMLSpanElement>()

const handleClick = () => {
  emit(
    'change',
    !open.value ? props.checkedValue || true : props.uncheckedValue || false
  )
  open.value = !open.value
}

const switchValue = computed(() => {
  if (isUndefined(props.checkedValue) || isUndefined(props.uncheckedValue)) {
    return open.value
  }
  return open.value ? props.checkedValue : props.uncheckedValue
})

const playAnimation = () => {
  if (!dotRef.value) return
  dotRef.value.style.animationName = open.value ? 'open' : 'close'
}

watch(
  () => open.value,
  () => playAnimation()
)
</script>
