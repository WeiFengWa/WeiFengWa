<template>
  <div
    :class="[
      bem.b(),
      bem.is('vertical', !props.horizontal),
      bem.is('horizontal', props.horizontal),
      bem.is('hidden', props.hidden)
    ]"
    :style="scrollStyle"
  >
    <div ref="containerRef" :class="bem.e('container')" @scroll="handleScroll">
      <div ref="contentRef" :class="bem.e('content')">
        <slot></slot>
      </div>
    </div>
    <div ref="trackRef" :class="bem.e('track')" @mousedown="clickTrackHandler">
      <div
        ref="thumbRef"
        :class="bem.e('thumb')"
        :style="buildThumbStyle"
        @mousedown="clickThumbHandler"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNameSpace } from '@weifengwa/utils/bem'
import { scrollEmits, scrollProps } from './scroll'
import '@weifengwa/styles/src/scroll.css'
import { computed, onMounted, reactive, ref, watch } from 'vue'

defineOptions({
  name: 'WfScroll'
})

const bem = createNameSpace('scroll')
const props = defineProps(scrollProps)
const emit = defineEmits(scrollEmits)

const containerRef = ref<HTMLDivElement>()
const contentRef = ref<HTMLDivElement>()
const trackRef = ref<HTMLDivElement>()
const thumbRef = ref<HTMLDivElement>()
const thumbStyle = ref()
const contentWH = ref(0)

const status = reactive({
  top: 0,
  left: 0,
  offsetTop: 0,
  offsetLeft: 0,
  dragging: false
})

const scrollStyle = computed(() => {
  let w = props.width?.toString() || '100%',
    h = props.height?.toString() || '300px'
  if (typeof w === 'number') w = props.width + 'px'
  if (typeof h === 'number') h = props.height + 'px'
  return {
    width: w,
    height: h
  }
})

const buildThumbStyle = computed(() => {
  if (props.horizontal)
    return {
      width: thumbWidth() + 'px'
    }
  return {
    height: thumbHeight() + 'px'
  }
})

const thumbHeight = () => {
  if (!containerRef.value || !contentRef.value) return 0
  // if (contentWH.value === 0 && contentRef.value.clientHeight === 0) {
  //   contentWH.value = containerRef.value.clientHeight
  //   contentRef.value.style.height = contentWH.value + 'px'
  // } else if (contentWH.value === 0) {
  //   contentWH.value = contentRef.value.clientHeight
  // } else {
  //   contentRef.value.style.height = contentWH.value + 'px'
  // }
  if (containerRef.value.clientHeight > contentRef.value.clientHeight) return 0
  const h =
    props.min ||
    50 * (1 + containerRef.value!.clientHeight / contentRef.value!.clientHeight)
  return h > (props.max || 100) ? props.max : h
}

const thumbWidth = () => {
  if (!containerRef.value || !contentRef.value) return 0
  // if (contentWH.value === 0 && contentRef.value.clientWidth === 0) {
  //   contentWH.value = containerRef.value.clientWidth
  //   contentRef.value.style.width = contentWH.value + 'px'
  // } else if (contentWH.value === 0) {
  //   contentWH.value = contentRef.value.clientWidth
  // } else {
  //   contentRef.value.style.width = contentWH.value + 'px'
  // }
  if (containerRef.value.clientWidth > contentRef.value.clientWidth) return 0
  const w =
    props.min ||
    50 * (1 + containerRef.value!.clientWidth / contentRef.value!.clientWidth)
  return w > (props.max || 100) ? props.max : w
}

// 监听滚动事件
const handleScroll = () => {
  if (contentRef.value && thumbRef.value && containerRef.value) {
    // console.log(containerRef.value.scrollTop)
    emit('scroll', {
      top: containerRef.value.scrollTop,
      left: containerRef.value.scrollLeft
    })
    if (props.hidden) return
    // 计算滚动比例
    const scrollRatio = props.horizontal
      ? containerRef.value.scrollLeft /
        (contentRef.value.clientWidth - containerRef.value.clientWidth)
      : containerRef.value.scrollTop /
        (contentRef.value.clientHeight - containerRef.value.clientHeight)
    // 计算滚动条的偏移量
    const thumbOffset = props.horizontal
      ? scrollRatio *
        (containerRef.value.clientWidth - thumbRef.value.clientWidth)
      : scrollRatio *
        (containerRef.value.clientHeight - thumbRef.value.clientHeight)

    // 设置滚动条的偏移量
    thumbRef.value.style.transform = props.horizontal
      ? `translateX(${thumbOffset}px)`
      : `translateY(${thumbOffset}px)`
  }
}

// 监听鼠标按下事件
const clickTrackHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (containerRef.value && contentRef.value) {
    scrollTo({
      left: e.offsetX,
      top: e.offsetY
    })
  }
  clickThumbHandler(e)
}

const scrollTo = ({ left, top }: { left: number; top: number }) => {
  if (containerRef.value && contentRef.value) {
    containerRef.value.scroll({
      left:
        (left *
          (contentRef.value.clientWidth - containerRef.value.clientWidth)) /
        containerRef.value.clientWidth,
      top:
        (top *
          (contentRef.value.clientHeight - containerRef.value.clientHeight)) /
        containerRef.value.clientHeight,
      behavior: 'smooth'
    })
  }
}

const setContentWH = (val: number) => {
  if (contentRef.value) {
    contentWH.value = val
  }
}

const clickThumbHandler = (e: MouseEvent) => {
  e.stopPropagation()
  status.dragging = true
  const trackRect = thumbRef.value?.parentElement?.getBoundingClientRect()
  status.top = e.clientY - (trackRect?.top || 0)
  status.left = e.clientX - (trackRect?.left || 0)
  status.offsetTop = e.clientY - status.top
  status.offsetLeft = e.clientX - status.left
  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
  document.onselectstart = () => false
}

const mouseMoveHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (status.dragging && containerRef.value && contentRef.value) {
    status.left = e.clientX - status.offsetLeft
    status.top = e.clientY - status.offsetTop
    if (props.horizontal) status.top = 0
    else status.left = 0
    containerRef.value.scroll({
      left:
        (status.left *
          (contentRef.value.clientWidth - containerRef.value.clientWidth)) /
        containerRef.value.clientWidth,
      top:
        (status.top *
          (contentRef.value.clientHeight - containerRef.value.clientHeight)) /
        containerRef.value.clientHeight
    })
  }
}

const mouseUpHandler = () => {
  status.dragging = false
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)
  document.onselectstart = null
}

// watch(
//   () => contentWH.value,
//   () => {
//     thumbStyle.value = buildThumbStyle()
//   }
// )

// watch(
//   () => props.horizontal,
//   () => {
//     if (props.horizontal) {
//       contentRef.value!.style.width = 'auto'
//       // contentRef.value!.style.overflowX = 'auto'
//     } else {
//       contentRef.value!.style.height = 'auto'
//       // contentRef.value!.style.overflowY = 'auto'
//     }
//     contentWH.value =
//       (props.horizontal
//         ? contentRef.value?.clientWidth
//         : contentRef.value?.clientHeight) || 0
//   }
// )

// onMounted(() => {
//   contentWH.value =
//     (props.horizontal
//       ? contentRef.value?.clientWidth
//       : contentRef.value?.clientHeight) || 0
// })

defineExpose({
  scrollTo,
  setContentWH
})
</script>
