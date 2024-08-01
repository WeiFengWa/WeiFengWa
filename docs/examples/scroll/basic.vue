<template>
  <wf-space vertical>
    <wf-space>
      <wf-switch v-model="horizontal" />
      {{ horizontal ? '水平' : '垂直' }}
    </wf-space>
    <wf-scroll :horizontal="horizontal">
      <div style="height: 300px; width: 200px; background: red">div1</div>
      <div style="height: 300px; width: 300px; background: blue">div2</div>
      <div style="height: 300px; width: 500px; background: red">div1</div>
    </wf-scroll>
  </wf-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const horizontal = ref(false)
</script>
