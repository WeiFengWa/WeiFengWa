<template>
  <div :class="[bem.b(), bem.is('button', button)]">
    <div :class="bem.e('inner')">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createNameSpace, key } from '@weifengwa/utils'
import { radioGroupEmits, radioGroupProps } from './radio-group'
import { provide, useId } from 'vue'
import '@weifengwa/styles/src/radio-group.css'

defineOptions({
  name: 'WfRadioGroup'
})

const model = defineModel<string | number | boolean>()
const bem = createNameSpace('radio-group')
const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const id = useId()
provide('id', id)

provide(key(id), {
  selectValue: model,
  select: v => selectHandler(v)
})

const selectHandler = (e: any) => {
  model.value = e
  emit('select', e)
}
</script>
