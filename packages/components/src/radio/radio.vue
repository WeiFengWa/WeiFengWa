<template>
  <span
    :class="[bem.b(), bem.is('selected', value === model.selectValue.value)]"
    @click="selectHandler"
  >
    <input :class="bem.e('input')" type="radio" />
    <span :class="bem.e('inner')"></span>
    <span :class="bem.e('label')">
      {{ label || value }}
    </span>
  </span>
</template>
∑
<script lang="ts" setup>
import { createNameSpace, key } from '@weifengwa/utils'
import { radioEmits, radioProps } from './radio'
import '@weifengwa/styles/src/radio.css'
import { inject } from 'vue'

defineOptions({
  name: 'WfRadio'
})

const bem = createNameSpace('radio')
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const id = inject<string>('id', '')
const model = inject<any>(key(id))

const selectHandler = () => {
  model?.select(props.value)
}
</script>
