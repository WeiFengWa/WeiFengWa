import {
  AppContext,
  ExtractPropTypes,
  ExtractPublicPropTypes,
  PropType
} from 'vue'

export const messageTypes = [
  'success',
  'warning',
  'info',
  'error',
  'notification'
] as const
export type messageType = (typeof messageTypes)[number]

export const definePropType = <T>(val: any): PropType<T> => val

export const messageDefaults = {
  duration: 3000,
  icon: '',
  id: '',
  message: '',
  onClose: undefined,
  type: 'success',
  offset: 16
} as const

export const messageProps = {
  id: {
    type: String
  },
  offset: {
    type: Number
  },
  title: String,
  message: String,
  duration: {
    type: Number
  },
  icon: String,
  type: {
    type: String as () => messageType
  },
  notification: {
    type: Boolean,
    default: undefined
  },
  onClose: {
    type: definePropType<() => void>(Function),
    default: undefined
  }
} as const

export const messageEmits = {
  destroy: () => true
}

export type MessageProps = ExtractPropTypes<typeof messageProps>
export type MessageEmits = typeof messageEmits

export interface MessageHandler {
  close: () => void
}

export type MessageFn = {
  (options?: MessageProps, appContext?: null | AppContext): MessageHandler
  closeAll(type?: messageType): void
}
export type MessageTypedFn = (
  options?: MessageProps,
  appContext?: null | AppContext
) => MessageHandler

export interface Message extends MessageFn {
  success: MessageTypedFn
  warning: MessageTypedFn
  info: MessageTypedFn
  error: MessageTypedFn
  notification: MessageTypedFn
}
