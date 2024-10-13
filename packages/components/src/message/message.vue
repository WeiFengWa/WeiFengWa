<template>
  <Transition
    name="message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="show"
      :id="id"
      ref="messageRef"
      :class="[bem.b(), bem.m(type), bem.is('notification', notification)]"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <wf-icon v-show="typeIcon" :class="bem.e('icon')" :name="typeIcon" />
      <div :class="bem.e('content')">
        <h2 v-if="notification && title" :class="bem.e('title')">
          {{ title }}
        </h2>
        <p :class="bem.e('message')">
          {{ typeIcon }}
        </p>
      </div>
      <wf-icon
        :class="bem.e('close')"
        name="iconamoon:close-light"
        @click="close"
      />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { createNameSpace } from '@weifengwa/utils'
import { messageEmits, messageProps } from './message'
import { computed, CSSProperties, onMounted, ref } from 'vue'
import { getLastOffset, getOffsetOrSpace } from './instance'
import '@weifengwa/styles/src/message.css'
import { useResizeObserver, useTimeoutFn } from '@vueuse/core'
import { TypeIconsMap } from '@weifengwa/utils'

defineOptions({
  name: 'WfMessage'
})

const messageRef = ref<HTMLDivElement>()
const show = ref(false)
const height = ref(0)

let stopTimer: (() => void) | undefined = undefined

const bem = createNameSpace('message')
const props = defineProps(messageProps)
defineEmits(messageEmits)

const lastOffset = computed(() => getLastOffset(props.id!))
const offset = computed(
  () => getOffsetOrSpace(props.id!, props.offset || 16) + lastOffset.value
)
const bottom = computed((): number => height.value + offset.value)
const customStyle = computed<CSSProperties>(() => ({
  top: `${offset.value}px`,
  '--duration': `${500}ms`,
  justifyContent: `${props.notification ? 'flex-end' : 'center'}`
}))
const typeIcon = computed(
  () => props.icon || TypeIconsMap[props.type || 'success'] || ''
)

function close() {
  show.value = false
}

useResizeObserver(messageRef, () => {
  height.value = messageRef.value!.getBoundingClientRect().height
})

function startTimer() {
  if (props.duration === 0) return
  ;({ stop: stopTimer } = useTimeoutFn(() => {
    close()
  }, props.duration || 3000))
}

function clearTimer() {
  stopTimer?.()
}

onMounted(() => {
  startTimer()
  show.value = true
})

defineExpose({
  show,
  bottom,
  close
})
</script>
