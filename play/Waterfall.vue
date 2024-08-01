<template>
  <div>
    <div class="waterfall">
      <slot></slot>
    </div>
    <div style="text-align: center; padding: 14px 0">
      <span ref="loadingRef">
        <wf-button type="text" :loading="loadIndex < children.length - 1">{{
          loadIndex < children.length - 1 ? '加载更多' : '- END -'
        }}</wf-button>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'

let column = 3
const gap = 14
let columnWidth = 0
let columnHeight: number[] = []

const waterfall = ref<HTMLDivElement>()
const loadingRef = ref<HTMLSpanElement>()
// 所有子项
const children = ref<HTMLDivElement[]>([])
const timerId = ref()
const loadIndex = ref(0)
const loading = ref(true)
const isResize = ref(false)

/**
 * 初始化
 */
const init = () => {
  const w = waterfall.value?.offsetWidth || 0
  if (w > 1200) column = 6
  else if (w > 1000) column = 5
  else if (w > 800) column = 4
  else if (w > 600) column = 3
  else column = 2
  console.log('列数', column)
  columnWidth = (w - gap * (column + 1)) / column
  columnHeight = Array(column).fill(0)
  loadMore()
}

/**
 * 根据窗口大小调整列数
 */
const resize = () => {
  if (timerId.value) clearTimeout(timerId.value)
  timerId.value = setTimeout(() => {
    isResize.value = true
    loading.value = true
    columnHeight = Array(column).fill(0)
    init()
  }, 300)
}

/**
 * 加载更多内容
 */
const loadMore = async () => {
  let start = loadIndex.value
  let end = Math.min(children.value.length, loadIndex.value + column)
  if (isResize.value) {
    start = 0
    end = loadIndex.value
    console.log('大小改变', start, end)
  }
  console.log('加载开始', start, end, loading.value)
  for (let i = start; i < end; i++) {
    const item = children.value[i]
    const img = item.querySelector('img[data-src]') as HTMLImageElement
    if (img) {
      await loadImg(item, img)
    } else {
      await updatePosition(item, undefined)
    }
  }
  loading.value = false
  isResize.value = false
  console.log('加载结束', start, end, loading.value)
}

/**
 *
 * @param item
 * @param img
 */
const loadImg = (item: HTMLDivElement, img: HTMLImageElement) => {
  return new Promise((resolve, reject) => {
    img.onload = () => {
      updateByImg(item, img)
      resolve(true)
    }
    img.onerror = () => {
      resolve(false)
    }
    img.src = img.getAttribute('data-src') || ''
  })
}

/**
 * 更新项目位置
 * @param item 项目
 * @param height 高度
 */
const updatePosition = (item: HTMLDivElement, img?: HTMLImageElement) => {
  return new Promise((resolve, reject) => {
    item.style.width = columnWidth + 'px'
    const itemChildren = Array.from(item.children) as HTMLElement[]
    // 计算除图片外其他元素的高度之和
    const itemHeight = itemChildren.reduce(
      (p, c) => p + c.getBoundingClientRect().height,
      0
    )
    item.style.height = itemHeight + 'px'
    const index = columnHeight.indexOf(Math.min(...columnHeight))
    item.style.left = `${index * (columnWidth + gap) + gap}px`
    item.style.top = `${columnHeight[index] + gap}px`
    item.style.opacity = '1'
    columnHeight[index] += itemHeight + gap

    // 更新容器高度
    const maxHeight = Math.max(...columnHeight)
    waterfall.value!.style.height = maxHeight + gap + 'px'
    if (!isResize.value) loadIndex.value++
    resolve(true)
  })
}

/**
 * 根据图片高度更新项目位置
 * @param item 项目
 * @param img 图片
 */
const updateByImg = (item: HTMLDivElement, img: HTMLImageElement) => {
  // 根据图片原始尺寸计算和每列宽度计算图片高度
  const imgHeight = (img.naturalHeight / img.naturalWidth) * columnWidth
  // 将图片display先设置为none（如果图片有过渡动画效果，
  // 图片加载后，过渡动画效果导致项目高度重复加图片高度）
  img.style.display = 'none'
  const itemChildren = Array.from(item.children) as HTMLElement[]
  // 计算除图片外其他元素的高度之和
  const itemHeight = itemChildren.reduce(
    (p, c) => p + c.getBoundingClientRect().height,
    0
  )
  // 将项目高度设置为除图片外其他元素高度之和
  //（防止窗口大小改变后，项目高度重复加图片高度）
  item.style.height = itemHeight + 'px'
  const height = itemHeight + imgHeight
  // 将图片高度设置为计算出来的图片高度
  img.style.height = imgHeight + 'px'
  img.style.width = '100%'
  img.style.display = 'block'
  // 将项目高度设置为其他元素高度和图片高度之和
  item.style.height = height + 'px'
  // 更新项目位置
  updatePosition(item, img)
}

const initView = () => {
  console.log('初始化')
  setTimeout(() => {
    waterfall.value = document.querySelector('.waterfall') as HTMLDivElement
    console.log(waterfall.value.children)
    children.value = Array.from(
      waterfall.value?.children as HTMLCollection
    ) as HTMLDivElement[]
    children.value.forEach(c => {
      c.style.opacity = '0'
      c.style.transition = 'all .5s'
      c.style.position = 'absolute'
      c.style.left = '-100%'
    })
    loadIndex.value = 0
    loading.value = true
    isResize.value = false
    window.onresize = resize
    init()
  }, 300)
}

// onMounted(() => initView())

watch(
  () => loading.value,
  val => {
    console.log('加载状态改变', loading.value, isResize.value)
    if (!val && !isResize.value) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          console.log(
            '交叉状态改变',
            entry.intersectionRatio,
            loading.value,
            loadIndex.value
          )
          // 如果 intersectionRatio 为 0，则目标在视野外，
          // 我们不需要做任何事情。
          if (
            entry.intersectionRatio <= 0 ||
            loadIndex.value >= children.value.length
          )
            return
          console.log('触发加载更多')
          loading.value = true
          setTimeout(() => {
            loadMore()
          }, 300)
          observer.unobserve(loadingRef.value!)
        },
        { threshold: 0.9 }
      )
      observer.observe(loadingRef.value!)
    }
  }
)

defineExpose({
  initView
})
</script>

<style scoped>
.waterfall {
  height: 0;
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>
