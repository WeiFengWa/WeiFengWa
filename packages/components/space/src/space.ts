import { ExtractPropTypes } from 'vue'

export const spaceAlign = ['start', 'end', 'center'] as const
type AlignValues = (typeof spaceAlign)[number]

export const spaceProps = {
  gap: Number || String,
  vertical: Boolean,
  align: {
    type: String as () => AlignValues, // 注意：这里的 type casting 并不会直接影响运行时，仅用于 TypeScript 类型检查
    validator: (value: string): boolean =>
      spaceAlign.includes(value as AlignValues) // 提供一个 validator 来在运行时检查值
  },
  nowrap: Boolean,
  fill: Boolean
}

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
