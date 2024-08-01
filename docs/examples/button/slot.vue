<template>
  <!--前置插槽-->
  <wf-button type="success" round>
    <template #before> ￥ </template>
    200.00
  </wf-button>
  <!--后置插槽-->
  <wf-button type="success" round>
    200.00
    <template #after> 元/个 </template>
  </wf-button>
</template>
