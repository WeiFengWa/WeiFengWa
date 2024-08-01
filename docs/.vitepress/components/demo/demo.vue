<template>
  <ClientOnly>
    <p v-html="decodeURIComponent(description)"></p>
    <div class="example">
      <exampleVue :example="examples[path]" />
      <hr class="divider" />
      <wf-space class="action-box" align="end">
        <wf-button icon="iconamoon:copy-duotone" square @click="copyCode" />
        <wf-button
          :icon="
            sourceVisible
              ? 'iconamoon:eye-off-duotone'
              : 'iconamoon:eye-duotone'
          "
          square
          @click="showSource"
        />
      </wf-space>
      <WfCollapseTransition>
        <sourceCodeVue
          v-show="sourceVisible"
          :source="decodeURIComponent(source)"
        />
      </WfCollapseTransition>
      <Transition name="wf-fade">
        <div class="source-control" v-show="sourceVisible">
          <span class="show-source" @click="showSource">
            <wf-icon name="iconamoon:arrow-up-2-bold" />
            隐藏源码
          </span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import exampleVue from './example.vue'
import sourceCodeVue from './source-code.vue'
import { useClipboard } from '@vueuse/core'
import { modules } from '..'
import WfMessage from '@weifengwa/components/message'
import WfCollapseTransition from '@weifengwa/components/collapse-transition'

export interface DemoProps {
  path: string
  description: string
  source: string
}

const props = defineProps<DemoProps>()

const sourceVisible = ref(false)
const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.source)
})

const examples = computed(() => {
  let examples: any[] = []
  Object.keys(modules).forEach((key: string) => {
    examples[key.replace('/examples/', '').replace('.vue', '')] = modules[key]
  })
  return examples
})

const showSource = () => {
  sourceVisible.value = !sourceVisible.value
}

async function copyCode() {
  if (!isSupported) {
    WfMessage.error('复制失败')
  }
  try {
    await copy()
    WfMessage.success('复制成功')
  } catch (e: any) {
    WfMessage.error(e.message)
  }
}

function enter(el) {
  el.style.height = 'auto'
  let endWidth = window.getComputedStyle(el).height
  el.style.height = '0px'
  el.offsetHeight // force repaint
  el.style.height = endWidth
}

function afterEnter(el) {
  el.style.height = null
  el.style.overflow = 'visible'
}

function leave(el) {
  el.style.height = window.getComputedStyle(el).height
  el.offsetHeight // force repaint
  el.style.overflow = 'hidden'
  el.style.height = '0px'
}

function afterLeave(el) {
  el.style.height = null
}
</script>

<style scoped>
.example {
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
  border-radius: 4px;
  position: relative;
  padding-top: 30px;
}

.example::before {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 12px;
  height: 12px;
  overflow: visible;
  font-weight: 700;
  font-size: 6px;
  line-height: 12px;
  white-space: nowrap;
  text-indent: 75px;
  background-color: #fc625d;
  border-radius: 16px;
  box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  content: attr(codetype);
}

.divider {
  margin: 0;
}

.action-box {
  padding: 14px;
}

.source-control {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  height: 44px;
  width: 100%;
  bottom: -2px;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid #dcdfe6;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.show-source {
  cursor: pointer;
  color: #6ab0f7;
  padding: 7px;
}

.show-source:hover {
  color: #409eff;
}
</style>
