<template>
  <wf-input v-model="inputValue" placeholder="请输入搜索内容">
    <template #prepend>
      <wf-button type="success" icon="iconamoon:search" />
    </template>
  </wf-input>
  <wf-input v-model="inputValue" placeholder="请输入搜索内容">
    <template #append>
      <wf-button type="primary" icon="iconamoon:search" />
    </template>
  </wf-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')

const changeHandler = (value: string) => {
  console.log(value)
}
</script>
