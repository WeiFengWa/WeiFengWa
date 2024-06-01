<template>
  <Teleport :to="props.appendTo || 'body'">
    <Transition name="dialog-fade">
      <div v-if="open" :class="[bem.b()]" @click="closeHandler">
        <div :class="bem.e('container')">
          <slot name="header">
            <div :class="bem.e('header')">标题</div>
          </slot>
          <div :class="bem.e('body')">
            <slot> 内容 </slot>
          </div>
          <slot name="footer">
            <div :class="bem.e('footer')">
              <wf-button @click="open = false">取消</wf-button>
              <wf-button type="primary">确定</wf-button>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { createNameSpace } from '@weifengwa/utils/bem'
import { dialogEmits, dialogProps } from './dialog'
import '@weifengwa/styles/src/dialog.css'

defineOptions({
  name: 'WfDialog'
})
const bem = createNameSpace('dialog')
const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const open = defineModel({ type: Boolean, default: false })

const closeHandler = () => {
  open.value = false
  emit('close')
}
</script>
