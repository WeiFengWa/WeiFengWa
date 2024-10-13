import { shallowReactive } from 'vue'
import type { ComponentInternalInstance, VNode } from 'vue'
import { MessageHandler, MessageProps } from './message'

export type MessageContext = {
  id: string
  vnode: VNode
  handler: MessageHandler
  vm: ComponentInternalInstance
  props: MessageProps
}

export const instances: MessageContext[] = shallowReactive([])

export const getInstance = (id: string) => {
  let _instances = instances
  let idx = instances.findIndex(instance => instance.id === id)
  let current = instances[idx]
  const isNotification = current?.props?.notification
  if (isNotification) {
    _instances = instances.filter(instance => instance.props.notification)
  } else {
    _instances = instances.filter(instance => !instance.props.notification)
  }
  idx = _instances.findIndex(instance => instance.id === id)
  current = _instances[idx]
  let prev: MessageContext | undefined
  if (idx > 0) {
    prev = _instances[idx - 1]
  }
  return { current, prev }
}

export const getLastOffset = (id: string): number => {
  const { prev } = getInstance(id)
  if (!prev) return 0
  return prev.vm.exposed!.bottom.value
}

export const getOffsetOrSpace = (id: string, offset: number) => {
  const idx = instances.findIndex(instance => instance.id === id)
  return idx > 0 ? 16 : offset
}
