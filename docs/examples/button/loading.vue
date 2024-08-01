<template>
  <wf-space>
    <wf-space>
      <wf-button
        :type="loading ? 'warning' : 'success'"
        :icon="loading ? 'iconamoon:restart' : 'iconamoon:check-circle-1'"
        :loading="loading"
        @click="startLoading"
      >
        {{ loading ? '正在加载' : '点我加载' }}
      </wf-button>
      <wf-button type="warning" icon="iconamoon:restart" loading>
        我还在加载 ...
      </wf-button>
      <wf-button
        type="success"
        icon="iconamoon:check-circle-1"
        :loading="false"
      >
        我加载完了
      </wf-button>
    </wf-space>
    <wf-space>
      <wf-button type="success" loading-type="default">默认加载状态</wf-button>
      <wf-button type="success" loading-type="loading">加载中状态</wf-button>
      <wf-button type="success" loading-type="success">加载成功状态</wf-button>
      <wf-button type="success" loading-type="failure">加载失败状态</wf-button>
    </wf-space>
  </wf-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false)

function startLoading() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1500)
}
</script>
