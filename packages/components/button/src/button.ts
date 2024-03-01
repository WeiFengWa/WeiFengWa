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
]
export const buttonNativeTypes = ['submit', 'reset', 'button']
export const buttonLoadingTypes = ['default', 'loading', 'success', 'failure']

export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: 'default',
    validator(value: string) {
      return buttonTypes.includes(value)
    }
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

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
