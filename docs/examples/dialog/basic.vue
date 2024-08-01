<template>
  <wf-switch v-model="open" />
  <wf-dialog v-model="open" title="我是标题" @open="onOpen" @close="onClose">
    我是内容
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
