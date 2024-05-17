import { ExtractPropTypes } from 'vue'

export const switchProps = {
  disabled: Boolean
}

export const switchEmits = {
  change: (val: boolean) => true
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = typeof switchEmits
