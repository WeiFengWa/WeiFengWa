<template>
  当前值{{ value }}
  <wf-checkbox-group v-model="value" @select="handleSelect">
    <wf-checkbox label="A" :value="1" />
    <wf-checkbox label="B" :value="0" />
    <wf-checkbox label="C" :value="2" />
  </wf-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref([1])

const handleSelect = (val: any[]) => {
  console.log(value.value, val)
}
</script>
