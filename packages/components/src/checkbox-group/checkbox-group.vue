<template>
  <span
    :class="[bem.b(), bem.is('disabled', disabled), bem.is('button', button)]"
  >
    <div :class="bem.e('inner')">
      <slot></slot>
    </div>
  </span>
</template>

<script lang="ts" setup>
import { createNameSpace, key } from '@weifengwa/utils'
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'
import { provide, useId } from 'vue'
import '@weifengwa/styles/src/checkbox-group.css'

defineOptions({
  name: 'WfCheckboxGroup'
})

const model = defineModel<any[]>()
const bem = createNameSpace('checkbox-group')
const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const id = useId()
provide('id', id)

provide(key(id), {
  selectValue: model,
  select: v => selectHandler(v)
})

const selectHandler = (e: any) => {
  if (model.value?.includes(e))
    model.value = model.value.filter(item => item !== e)
  else model.value?.push(e)
  emit('select', model.value || [])
}
</script>
