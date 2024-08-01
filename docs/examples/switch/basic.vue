<template>
  <wf-switch v-model="value" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(false)

const handleChange = (val: string | boolean | number) => {
  console.log(val)
}
</script>
