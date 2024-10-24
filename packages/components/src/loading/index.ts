import { withInstallDirective } from '@weifengwa/utils'
import type { Directive } from 'vue'

const myDirective: Directive = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {
    if (!binding.value) return
    el.style.position = 'relative'
    const div = document.createElement('div')
    const text = document.createElement('span')
    text.innerText = '加载中...'
    div.classList.add('wf-loading-mask')
    div.appendChild(text)
    el.appendChild(div)
    console.log('自定义指令挂载完成')
  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {
    console.log(binding)
    if (binding.value && !binding.oldValue) {
      el.style.position = 'relative'
      const div = document.createElement('div')
      const text = document.createElement('span')
      text.innerText = '加载中...'
      div.classList.add('wf-loading-mask')
      div.appendChild(text)
      el.appendChild(div)
    }
    if (!binding.value && binding.oldValue) {
      el.removeChild(el.lastChild)
    }
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {}
}

export const WfLoading = withInstallDirective(myDirective, 'loading')
