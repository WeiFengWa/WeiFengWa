import { buttonProps } from './button'

import type { ExtractPropTypes } from 'vue'

export const buttonGroupProps = {
  type: buttonProps.type
} as const

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
