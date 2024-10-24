<template>
  当前值{{ value }}
  <wf-radio-group v-model="value" @select="handleSelect">
    <wf-radio label="A" :value="1" />
    <wf-radio label="B" :value="0" />
  </wf-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref()

const handleSelect = (val: string | boolean | number) => {
  console.log(val)
}
</script>
