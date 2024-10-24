import { ExtractPropTypes } from 'vue'

export const checkboxGroupProps = {
  name: String,
  value: {
    type: Array,
    default: () => []
  },
  disabled: Boolean,
  button: Boolean
}

export const checkboxGroupEmits = {
  select: (value: any[]) => true
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
