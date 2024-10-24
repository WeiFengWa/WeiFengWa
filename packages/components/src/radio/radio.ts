import { ExtractPropTypes } from 'vue'

export const radioProps = {
  label: String,
  value: {
    type: [String, Number, Boolean],
    default: 0
  },
  disabled: Boolean
}

export const radioEmits = {
  select: (value: string | number | boolean) => true
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
