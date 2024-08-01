import { createVNode, render } from 'vue'
import MessageConstructor from './message.vue'
import { instances } from './instance'
import type { MessageContext } from './instance'
import type { AppContext } from 'vue'
import {
  messageDefaults,
  MessageHandler,
  MessageProps,
  messageTypes
} from './message'
import type { Message, MessageFn, messageType } from './message'
import { isString } from '@weifengwa/utils/utils'

let seed = 1

const normalizeOptions = (params?: MessageProps) => {
  const options: MessageProps =
    !params || isString(params) ? ({ message: params } as MessageProps) : params

  const normalized = {
    ...messageDefaults,
    ...options
  }

  return normalized as MessageProps
}

const closeMessage = (instance: MessageContext) => {
  const idx = instances.indexOf(instance)
  if (idx === -1) return

  instances.splice(idx, 1)
  const { handler } = instance
  handler.close()
}

const createMessage = (
  appendTo: HTMLElement,
  options: MessageProps,
  context?: AppContext | null
): MessageContext => {
  const id = `message_${seed++}`
  const userOnClose = options.onClose

  const container = document.createElement('div')

  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose?.()
      closeMessage(instance)
    },
    onDestroy: () => {
      render(null, container)
    }
  }
  const vnode = createVNode(MessageConstructor, props, {
    message: () => props.message
  })
  vnode.appContext = context || message._context

  render(vnode, container)

  appendTo.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const handler: MessageHandler = {
    close: () => {
      vm.exposed!.show.value = false
    }
  }

  const instance: MessageContext = {
    id,
    vnode,
    vm,
    handler,
    props: (vnode.component as any).props
  }

  return instance
}

const message: MessageFn &
  Partial<Message> & { _context: AppContext | null } = (
  options: any,
  context
) => {
  const instance = createMessage(document.body, options, context)
  instances.push(instance)
  return instance.handler
}

messageTypes.forEach(type => {
  message[type] = (options: any = {}, appContext) => {
    const normalized = normalizeOptions(options)
    if (type == 'notification') {
      return message({ ...normalized, type, notification: true }, appContext)
    }
    return message({ ...normalized, type }, appContext)
  }
})

export function closeAll(type?: messageType): void {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close()
    }
  }
}

message.closeAll = closeAll
message._context = null

export default message as Message
