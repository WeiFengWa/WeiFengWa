<template>
  <span :class="[bem.b(), bem.is('selected', isSelect)]" @click="selectHandler">
    <input :class="bem.e('input')" type="checkbox" />
    <span :class="[bem.e('inner')]"></span>
    <span :class="[bem.e('label')]">{{ label || value }}</span>
  </span>
</template>

<script lang="ts" setup>
import { createNameSpace, key } from '@weifengwa/utils'
import { checkboxEmits, checkboxProps } from './checkbox'
import '@weifengwa/styles/src/checkbox.css'
import { computed, inject } from 'vue'

defineOptions({
  name: 'WfCheckbox'
})

const bem = createNameSpace('checkbox')
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const id = inject<string>('id', '')
const model = inject<any>(key(id))

const selectHandler = () => {
  model?.select(props.value)
}

const isSelect = computed(() => {
  return model.selectValue.value.includes(props.value)
})
</script>
