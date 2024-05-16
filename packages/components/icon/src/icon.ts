// 这里主要放置组件的props及一些公共的方法

import type { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
    size: [Number, String] as PropType<number | string>,
    color: String,
    name: String
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>