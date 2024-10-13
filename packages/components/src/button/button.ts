import { ExtractPropTypes } from 'vue'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'info',
  'text',
  'link',
  'dashed'
] as const

export const buttonNativeTypes = ['submit', 'reset', 'button'] as const
export const buttonLoadingTypes = [
  'default',
  'loading',
  'success',
  'failure'
] as const

export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: 'default'
    // validator(value: string) {
    //   return buttonTypes.includes(value)
    // }
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button'
  },
  round: Boolean,
  circle: Boolean,
  square: Boolean,
  disabled: Boolean,
  icon: String,
  rightIcon: String,
  link: String,
  loading: Boolean,
  loadingType: {
    type: String,
    values: buttonLoadingTypes,
    default: ''
  }
}

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']
export type ButtonLoadingType = ButtonProps['loadingType']
export type ButtonEmits = typeof buttonEmits
