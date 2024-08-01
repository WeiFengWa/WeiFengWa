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
  WfMessage.notification('测试')
}

const Error = () => {
  count.value++
  WfMessage.error({
    title: '标题',
    message: `${count.value} 测试Mesasdasdasdd asage测试Mesasdasdasdd asage测试Mesasdasdasdd asage测试Mesasdasdasdd asage测试Mesasdasdasdd asage测试Mesasdasdasdd asage`,
    notification: true
  })
}

const Warring = () => {
  count.value++
  WfMessage.warning({
    title: '标题',
    message: `${count.value} 测试Message`,
    notification: true
  })
}

const Info = () => {
  count.value++
  WfMessage.info({
    title: '标题',
    message: `${count.value} 测试Message`,
    notification: true
  })
}
</script>
