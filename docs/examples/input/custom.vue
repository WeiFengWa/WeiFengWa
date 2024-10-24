<template>
  <wf-input
    v-model="inputValue"
    prefix-icon="iconamoon:search"
    placeholder="请输入搜索内容"
  />
  <wf-input
    v-model="inputValue"
    suffix-icon="iconamoon:search"
    placeholder="请输入搜索内容"
    clearable
    :max="10"
  />
  <wf-input
    v-model="inputValue"
    prefix-icon="iconamoon:search"
    placeholder="请输入搜索内容"
    disabled
  />
  <wf-input
    v-model="inputValue"
    suffix-icon="iconamoon:search"
    placeholder="请输入搜索内容"
    readonly
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')

const changeHandler = (value: string) => {
  console.log(value)
}
</script>
