import { ExtractPropTypes } from 'vue'

export const radioGroupProps = {
  name: String,
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  disabled: Boolean,
  button: Boolean
}

export const radioGroupEmits = {
  select: (value: string | number | boolean) => true
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioGroupEmits = typeof radioGroupEmits
