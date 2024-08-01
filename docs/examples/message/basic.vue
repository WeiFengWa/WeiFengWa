<template>
  <wf-button type="success" @click="Success">Success</wf-button>
  <wf-button type="danger" @click="Error">Error</wf-button>
  <wf-button type="warring" @click="Warring">Warring</wf-button>
  <wf-button type="info" @click="Info">Info</wf-button>
</template>

<script setup lang="ts">
import { WfMessage } from '@weifengwa/components/message'
import { ref } from 'vue'

const count = ref(0)

const Success = () => {
  count.value++
  WfMessage.success('测试一下')
}

const Error = () => {
  count.value++
  WfMessage.error(
    `${count.value} 测试Mesasdasdasdd asage测试Mesasdasdasdd asage测试Mesasdasdasdd asage测试Mesasdasdasdd asage测试Mesasdasdasdd asage测试Mesasdasdasdd asage`
  )
}

const Warring = () => {
  count.value++
  WfMessage.warning(`${count.value} 测试Message`)
}

const Info = () => {
  count.value++
  WfMessage.info(`${count.value} 测试Message`)
}
</script>
