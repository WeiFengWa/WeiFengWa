<template>
  <div class="source-wrapper">
    <highlightjs
      language="vue"
      :code="decodeURIComponent(source)"
    ></highlightjs>
  </div>
</template>
<script setup lang="ts">
interface Props {
  source: string
}
const props = defineProps<Props>()
</script>

<style scoped>
.source-wrapper {
  position: relative;
  display: block;
  /* padding: 30px 5px 2px; */
  overflow-x: hidden;
  line-height: 20px;
  text-align: left;
  background: #2e2828;
  /* margin: 0 14px 14px; */
  /* border-radius: 8px; */
}

.source-wrapper::before {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 12px;
  height: 12px;
  overflow: visible;
  font-weight: 700;
  font-size: 6px;
  line-height: 12px;
  white-space: nowrap;
  text-indent: 75px;
  background-color: #fc625d;
  border-radius: 16px;
  box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  content: attr(codetype);
}

/** 滚动条 */
:deep(.hljs) {
  overflow-x: auto;
  border-radius: 4px;
  padding-top: 30px;
}

:deep(.hljs::-webkit-scrollbar) {
  width: 12px !important;
  height: 12px !important;
}

:deep(.hljs::-webkit-scrollbar-thumb) {
  height: 30px !important;
  background: #d1d8e6;
  background-clip: content-box;
  border: 2px solid transparent;
  border-radius: 19px;
  opacity: 0.8;
}

:deep(.hljs::-webkit-scrollbar-thumb:hover) {
  background: #a5b3cf;
  background-clip: content-box;
  border: 2px solid transparent;
}

:deep(.hljs::-webkit-scrollbar-track-piece) {
  width: 30px;
  height: 30px;
  background: #333;
}

::-webkit-scrollbar-button {
  display: none;
}
</style>
