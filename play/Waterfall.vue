<template>
  <div ref="waterfall" class="waterfall">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { moveSyntheticComments } from 'typescript'
import { onMounted, reactive, ref } from 'vue'

let column = 3
const gap = 14
let columnWidth = 0
let columnHeight: number[] = []

const waterfall = ref<HTMLDivElement>()
const children = ref<HTMLDivElement[]>([])
const timerId = ref()

/**
 * 初始化
 *
 */
const init = () => {
  columnHeight = Array(column).fill(0)
  children.value.forEach(item => {
    const img = item.querySelector('img')
    if (img && !img.complete) {
      img.onload = () => updateByImg(item, img)
      img.onerror = () => {
        img.remove()
        item.firstElementChild!.textContent += ' - 图片加载失败'
        update(item, item.offsetHeight)
      }
    } else if (img) {
      updateByImg(item, img)
    } else {
      update(item, item.offsetHeight)
    }
  })
  // 更新容器高度
  const maxHeight = Math.max(...columnHeight)
  waterfall.value!.style.height = maxHeight + gap + 'px'
}

/**
 * 根据窗口大小调整列数
 */
const resize = () => {
  if (timerId.value) clearTimeout(timerId.value)
  timerId.value = setTimeout(() => {
    const w = waterfall.value?.offsetWidth || 0
    if (w > 1200) column = 6
    else if (w > 1000) column = 5
    else if (w > 800) column = 4
    else if (w > 600) column = 3
    else column = 2
    columnWidth = (w - gap * (column + 1)) / column
    init()
  }, 300)
}

/**
 * 更新项目位置
 * @param item 项目
 * @param height 高度
 */
const update = (item: HTMLDivElement, height: number) => {
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
  update(item, height)
}

onMounted(() => {
  children.value = Array.from(
    waterfall.value?.children as HTMLCollection
  ) as HTMLDivElement[]
  children.value.forEach(c => {
    c.style.opacity = '0'
    c.style.transition = 'all .5s'
    c.style.position = 'absolute'
  })
  window.onresize = resize
  resize()
})
</script>

<style scoped>
.waterfall {
  position: relative;
}
</style>
