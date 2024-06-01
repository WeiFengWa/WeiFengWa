# Dialog 弹窗

## 基本使用

<wf-switch v-model="open1"/>
<wf-dialog v-model="open1"></wf-dialog>

## 自定义内容

<wf-switch v-model="open2"/>
<wf-dialog v-model="open2">
  <template #header>
    <h1>自定义头部</h1>
  </template>
  自定义内容
  <template #footer>
    <p>自定义底部</p>
  </template>
</wf-dialog>

<script setup lang="ts">
import { ref } from 'vue';

const open1 = ref(false);
const open2 = ref(false);
</script>
