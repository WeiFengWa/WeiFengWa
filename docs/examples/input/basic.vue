<template>
  <wf-input v-model="inputValue" />
  <wf-input v-model="inputValue" password />
  <wf-input
    v-model="inputValue"
    textarea
    :max="10"
    placeholder="留下你的足迹"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')

const changeHandler = (value: string) => {
  console.log(value)
}
</script>
