import { ExtractPropTypes } from 'vue'

export const scrollProps = {
  width: [Number, String],
  height: [Number, String],
  hidden: Boolean,
  max: Number,
  min: Number,
  hover: String,
  active: String,
  horizontal: Boolean
}

export const scrollEmits = {
  scroll: ({ top, left }: { top: number; left: number }) => true
}

export const scrollMethods = {
  scrollTo: (val: number) => true,
  scrollToTop: () => true,
  scrollToBottom: () => true,
  scrollToElement: (val: string) => true
}

export type ScrollProps = ExtractPropTypes<typeof scrollProps>
export type ScrollEmits = typeof scrollEmits
export type ScrollMethods = typeof scrollMethods
