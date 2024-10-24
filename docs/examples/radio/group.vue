<template>
  当前值{{ value }}
  <wf-radio-group v-model="value" button @select="handleSelect">
    <wf-radio label="C" value="c" />
    <wf-radio label="D" value="d" />
    <wf-radio label="E" value="e" />
  </wf-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref()

const handleSelect = (val: string | boolean | number) => {
  console.log(val)
}
</script>
