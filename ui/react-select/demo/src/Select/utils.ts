export function getScrollParent(element: HTMLElement) {
  let style = window.getComputedStyle(element)
  const excludeStaticParent = style.position === 'absolute'
  const overflowRegex = /(auto|scroll)/
  const documentElement = window

  if (style.position === 'fixed') {
    return documentElement
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  for (let parent = element; (parent = parent.parentElement); ) {
    style = window.getComputedStyle(parent)
    if (excludeStaticParent && style.position === 'static') {
      continue
    }
    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent
    }
  }

  return documentElement
}

export function getScrollTop(el: HTMLElement) {
  if (isDocumentElement(el)) {
    return window.scrollY
  }
  return el.scrollTop
}

export function normalizedHeight(el: HTMLElement) {
  if (isDocumentElement(el)) {
    return window.innerHeight
  }

  return el.clientHeight
}

export function isDocumentElement(el: HTMLElement) {
  return [document.documentElement, document.body, window].indexOf(el) > -1
}

// https://github.com/JedWatson/react-select/blob/b0411ff46bc1ecf45d9bca4fb58fbce1e57f847c/packages/react-select/src/internal/useScrollCapture.js

export function setMenuPosition(dropdown: HTMLElement, element: HTMLElement, inputHeight: number, leftOffset: number) {
  // Done with JS instead of React, otherwise it will lag behind
  const offset = element.getBoundingClientRect()
  const top = offset.top
  const left = offset.left
  dropdown.style.top = `${top + inputHeight}px`
  dropdown.style.left = `${left + leftOffset}px`
}

export function scrollIsAtBottom(node: HTMLElement) {
  return node.scrollTop + node.offsetHeight === node.scrollHeight
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function toggleValue({ value, selectedValues }: { value: string; selectedValues: string[] | null }) {
  const wrappedSelectedValues = selectedValues ? [...selectedValues] : []
  if (wrappedSelectedValues.includes(value)) {
    const newValues = wrappedSelectedValues.filter((v) => v !== value)
    return newValues.length === 0 ? null : newValues
  }
  return [...wrappedSelectedValues, value]
}
