import { ExtractPropTypes } from 'vue'

export const dialogProps = {
  title: String,
  width: String || Number,
  appendTo: String
}

export const dialogEmits = {
  open: () => true,
  close: () => true
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
export type DialogEmits = typeof dialogEmits
