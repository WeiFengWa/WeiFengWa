/**
 * BME规范
 * block 代码块 w-button
 * element 元素 w-button__element
 * modifier 装饰 w-button__element--disabled
 * state 状态 is-checked is-enabled
 *
 * :class=[bem.b('button')]
 */

// z-button-box__element--modifier
function _bem(
  prefixName: string,
  block: string,
  element: string,
  modifier: string
) {
  if (block) {
    prefixName += `-${block}`
  }
  if (element) {
    prefixName += `__${element}`
  }
  if (modifier) {
    prefixName += `--${modifier}`
  }
  return prefixName
}

function createBEM(prefixName: string) {
  const b = (block: string = '') => _bem(prefixName, block, '', '')
  const e = (element: string = '') =>
    element ? _bem(prefixName, '', element, '') : ''
  const m = (modifier: string = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : ''
  const be = (block: string = '', element: string = '') =>
    block && element ? _bem(prefixName, block, element, '') : ''
  const bm = (block: string = '', modifier: string = '') =>
    block && modifier ? _bem(prefixName, block, '', modifier) : ''
  const em = (element: string = '', modifier: string = '') =>
    element && modifier ? _bem(prefixName, '', element, modifier) : ''
  const bem = (
    block: string = '',
    element: string = '',
    modifier: string = ''
  ) =>
    block && element && modifier
      ? _bem(prefixName, block, element, modifier)
      : ''
  const is = (
    name: string = '',
    state: string | boolean | number | undefined
  ) => (name && state ? `is-${name}` : '')

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  }
}

export function createNameSpace(name: string) {
  const prefixName = `wf-${name}`
  return createBEM(prefixName)
}

// const bem = createNameSpace('icon')

// console.log(bem.b('box'))
// console.log(bem.e('element'))
// console.log(bem.m('modifier'))
// console.log(bem.em('element', 'modifier'))
// console.log(bem.bem('box', 'element', 'modifier'))
// console.log(bem.is('enabled', true))
