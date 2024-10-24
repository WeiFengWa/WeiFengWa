import { InjectionKey } from 'vue'

/**
 * 判断变量是否为字符串
 * @param {*} data
 * @returns {Boolean}
 */
export const isString = (data: any): boolean => typeof data === 'string'

/**
 * 判断数据是否为undefined
 * @param data 数据
 * @returns 结果
 */
export const isUndefined = (data: any): boolean => typeof data === 'undefined'

export const key = (id: string) =>
  Symbol.for(id) as InjectionKey<{
    selectValue: any
    select: (v: any) => void
  }>
