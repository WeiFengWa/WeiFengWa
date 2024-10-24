import { ExtractPropTypes } from 'vue'

export const inputProps = {
  textarea: Boolean,
  password: Boolean,
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  disabled: Boolean,
  readonly: Boolean,
  clearable: {
    type: Boolean,
    default: true
  },
  max: Number,
  min: Number,
  autocomplete: String,
  name: String,
  value: String,
  prefixIcon: String,
  suffixIcon: String
}

export const inputEmits = {
  change: (value: string) => true
}

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits
