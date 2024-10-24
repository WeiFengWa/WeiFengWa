<template>
  <Teleport :to="props.appendTo || 'body'">
    <Transition name="dialog-fade">
      <div v-if="open" :class="[bem.b()]" @click="maskHandler">
        <div :class="bem.e('container')" @click.stop>
          <slot name="header">
            <div v-if="title" :class="bem.e('header')">{{ title }}</div>
          </slot>
          <div :class="bem.e('body')">
            <slot></slot>
          </div>
          <slot name="footer">
            <div :class="bem.e('footer')">
              <wf-button @click="closeHandler">取消</wf-button>
              <wf-button type="primary">确定</wf-button>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { createNameSpace } from '@weifengwa/utils/src/bem'
import { dialogEmits, dialogProps } from './dialog'
import '@weifengwa/styles/src/dialog.css'
import WfButton from '../button'
import { watch } from 'vue'

defineOptions({
  name: 'WfDialog'
})
const bem = createNameSpace('dialog')
const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const open = defineModel({ type: Boolean, default: false })

const closeHandler = () => {
  open.value = false
}

const maskHandler = () => {
  if (props.maskClosable) {
    closeHandler()
  }
}

watch(
  () => open.value,
  newValue => {
    if (newValue) {
      emit('open')
    } else {
      emit('close')
    }
  }
)
</script>
