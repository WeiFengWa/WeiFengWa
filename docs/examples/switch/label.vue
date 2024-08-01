<template>
  <wf-switch
    v-model="value"
    checked-value="1"
    unchecked-value="0"
    checked-label="开"
    unchecked-label="关"
    show-label
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)

const handleChange = (val: string | boolean | number) => {
  console.log(val)
}
</script>
