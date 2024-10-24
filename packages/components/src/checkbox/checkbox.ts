import { ExtractPropTypes } from 'vue'

export const checkboxProps = {
  label: String,
  value: {
    type: [String, Number, Boolean],
    default: 0
  },
  disabled: Boolean
}

export const checkboxEmits = {
  select: (value: string | number | boolean) => true
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
