<template>
  当前值{{ value }}
  <wf-checkbox-group v-model="value" button @select="handleSelect">
    <wf-checkbox label="C" value="c" />
    <wf-checkbox label="D" value="d" />
    <wf-checkbox label="E" value="e" />
    <wf-checkbox label="F" :value="true" />
    <wf-checkbox label="G" :value="false" />
  </wf-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref([true])

const handleSelect = (val: any[]) => {
  console.log(value.value, val)
}
</script>
