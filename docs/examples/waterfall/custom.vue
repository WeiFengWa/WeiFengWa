<template>
  <wf-waterfall
    id="custom-waterfall"
    ref="waterfallRef"
    v-model="data"
    :column="2"
    :gap="14"
    loading-label="拼命加载中..."
    no-more-label="没有更多了"
    :has-more="hasMore"
    @load-more="loadMore"
  >
    <div v-for="(item, index) in data" :key="item" class="waterfall-item">
      <span class="waterfall-header">{{ index }}</span>
      <div style="display: flex; flex-direction: column">
        <div>
          <img class="waterfall-img" :data-src="randomImg()" alt="" />
        </div>
      </div>
      <span class="waterfall-header"> Footer </span>
    </div>
  </wf-waterfall>
</template>

<script setup lang="ts">
import WfWaterfall from '@weifengwa/components/src/waterfall'
import { ref } from 'vue'

const waterfallRef = ref<InstanceType<typeof WfWaterfall>>()
const data = ref<any[]>([])
const url = 'https://picsum.photos/v2/list'
const page = ref(1)
const limit = ref(6)
const hasMore = ref(true)

const imgs = [
  'https://pic3.zhimg.com/50/v2-75c2db14f9cf8497cbde48b2a64e6f3c_hd.jpg?source=1940ef5c',
  'https://ts1.cn.mm.bing.net/th/id/R-C.79674e2cc5b0fec9df6ad2b51c61631a?rik=2NzwkGMiXn883g&riu=http%3a%2f%2fimage.hnol.net%2fc%2f2021-02%2f10%2f08%2f202102100838302556-6865224.jpg&ehk=lbxyJiUqZX4K%2b3EWsJDc2tC326BLiueeuY6jnf1tnO0%3d&risl=&pid=ImgRaw&r=0',
  'https://img.keaitupian.cn/newupload/11/1667898534424990.jpg',
  'https://th.bing.com/th/id/R.6d8a57256ba630185743ba8557f4ed14?rik=kKAuW8iPOzqxrw&riu=http%3a%2f%2fimage.yjcf360.com%2fu%2fcms%2fwww%2f201904%2f12085107r8jm.jpg&ehk=oWXeK6n%2fAFkliTRQ1vCxy3LQKRaP4Jqtb5OoSWlGGAk%3d&risl=&pid=ImgRaw&r=0',
  'https://img.keaitupian.cn/newupload/10/1634023331816437.jpg',
  'https://gd-hbimg.huaban.com/993418255fe6883b4d495248657dab23324a288c25632-BhsJhi_fw658',
  'https://images.chinatimes.com/newsphoto/2021-03-19/656/20210319003325.jpg',
  'https://ts1.cn.mm.bing.net/th/id/R-C.d35d902d0821680ba672de0b60bd4baa?rik=jwZoREWTkJDTog&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2021%2f04%2f26%2f4dbd9e6796d1435b8eaefd1ae9e04b26.jpg&ehk=1bu2z0m9sclxtbz0temcYWLVVo9svFljleD2e%2frzrxw%3d&risl=&pid=ImgRaw&r=0',
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.KLPedwA8SOEfjJlgMr0gWQAAAA?rs=1&pid=ImgDetMain',
  'https://www.keaitupian.cn/cjpic/frombd/1/253/3361774741/2116779004.jpg',
  'https://pic4.zhimg.com/v2-f3112f99c630ab9bb3972ed3f451f40d_r.jpg?source=1940ef5c',
  'https://ts1.cn.mm.bing.net/th/id/R-C.f0906bef43f4341a3a7d65f2b7feebae?rik=UxKHhQpkSjcvRw&riu=http%3a%2f%2fimage.yjcf360.com%2fu%2fcms%2fwww%2f202101%2f15104740np4f.jpg&ehk=R307%2bILyUoALeFDUL1rD3YdZbuTkvxn7nXHEbF%2b0Sbg%3d&risl=&pid=ImgRaw&r=0',
  'https://img.keaitupian.cn/newupload/09/1662537258640367.jpg',
  'https://img.keaitupian.cn/newupload/08/1661503561849843.jpg',
  'https://p.qqan.com/up/2021-1/16104196979967970.jpg'
]

// 随机获取imgs的元素
const randomImg = () => {
  return imgs[Math.floor(Math.random() * imgs.length)]
}

const getData = () => {
  fetch(`${url}?page=${page.value}&limit=${limit.value}`)
    .then(res => res.json())
    .then(res => {
      data.value = [...data.value, ...res]
      // console.log('加载完成')
    })
}
getData()

const loadMore = () => {
  if (page.value >= 3) {
    hasMore.value = false
    return
  }
  page.value++
  getData()
}
</script>

<style scoped>
.waterfall-item {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #dadada;
  border-radius: 8px;
  box-sizing: border-box;
}

.waterfall-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  font-weight: 550;
}

.waterfall-img {
  transition: all 0.5s;
}
</style>
