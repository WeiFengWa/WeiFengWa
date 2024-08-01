<template>
  <wf-switch v-model="open" />
  <wf-dialog v-model="open" @open="onOpen" @close="onClose">
    <template #header>
      <span>我是自定义标题</span>
    </template>
    我是自定义内容
    <template #footer>
      <span>我是自定义底部</span>
    </template>
  </wf-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const onOpen = () => {
  console.log('open')
}
const onClose = () => {
  console.log('close')
}
</script>
