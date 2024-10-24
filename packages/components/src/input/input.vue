<template>
  <div :class="classArr">
    <div :class="bem.e('prepend')">
      <slot name="prepend"> </slot>
    </div>
    <wf-icon
      v-if="prefixIcon"
      :class="bem.e('prefix')"
      :name="prefixIcon"
      :size="16"
    />
    <div :class="bem.e('inner-wrapper')">
      <textarea
        v-if="textarea"
        v-model="model"
        :class="bem.e('inner')"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="max"
        :minlength="min"
        :style="{
          width: (clearable || password) && model ? 'calc(100% - 20px)' : '100%'
        }"
      ></textarea>
      <input
        v-else
        v-model="model"
        :type="showPassword ? 'password' : 'text'"
        :class="bem.e('inner')"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="max"
        :minlength="min"
        :style="{
          width: (clearable || password) && model ? 'calc(100% - 20px)' : '100%'
        }"
      />
      <wf-icon
        v-show="password && model"
        :class="bem.e('password')"
        :size="16"
        :name="showPassword ? 'iconamoon:eye' : 'iconamoon:eye-off'"
        @click="showPassword = !showPassword"
      />
      <wf-icon
        v-show="clearable && model && !password"
        :class="bem.e('clear')"
        :size="16"
        name="iconamoon:close-circle-1"
        @click="clear"
      />
    </div>
    <wf-icon
      v-if="suffixIcon"
      :class="bem.e('suffix')"
      :name="suffixIcon"
      :size="16"
    />
    <div :class="bem.e('append')">
      <slot name="append"> </slot>
    </div>
    <span
      v-if="max"
      :class="bem.e('counter')"
      :style="{
        color: (model?.length || 0) > max ? 'red' : 'gray'
      }"
    >
      {{ model?.length }} / {{ max }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { inputEmits, inputProps } from './input'
import { createNameSpace } from '@weifengwa/utils'
import '@weifengwa/styles/src/input.css'

defineOptions({
  name: 'WfInput'
})

const bem = createNameSpace('input')
const model = defineModel({
  type: String || Number,
  set(value) {
    emit('change', value)
    return value
  }
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const showPassword = ref(props.password)

const classArr = computed(() => {
  return [
    bem.b(),
    bem.is('disabled', props.disabled),
    bem.is('readonly', props.readonly)
  ]
})

const clear = () => {
  model.value = ''
}
</script>
