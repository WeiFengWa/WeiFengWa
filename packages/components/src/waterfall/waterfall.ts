import { data } from 'autoprefixer'
import { ExtractPropTypes } from 'vue'

export const waterfallProps = {
  column: {
    type: Number,
    default: 0
  },
  gap: {
    type: Number,
    default: 14
  },
  hasMore: {
    type: Boolean,
    default: true
  },
  id: {
    type: String,
    default: 'waterfall'
  },
  loadingLabel: {
    type: String,
    default: '加载中...'
  },
  noMoreLabel: {
    type: String,
    default: '- END -'
  }
}

export const waterfallEmits = {
  loadMore: () => true
}

export type WaterfallProps = ExtractPropTypes<typeof waterfallProps>
export type WaterfallEmits = typeof waterfallEmits
