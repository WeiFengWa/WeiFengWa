import { ExtractPropTypes } from 'vue'

export const switchProps = {
  name: String,
  disabled: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  dotColor: String,
  checkedValue: {
    type: [String, Number, Boolean],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean],
    default: false
  },
  checkedLabel: String,
  uncheckedLabel: String,
  showLabel: Boolean,
  showLabelRight: Boolean
}

export const switchEmits = {
  change: (val: string | number | boolean) => true
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = typeof switchEmits
