import { ExtractPropTypes } from 'vue'

export const switchProps = {
  disabled: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  dotColor: String,
  checkedValue: String || Number || Boolean,
  uncheckedValue: String || Number || Boolean
}

export const switchEmits = {
  change: (val: string | number | boolean) => true
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = typeof switchEmits
