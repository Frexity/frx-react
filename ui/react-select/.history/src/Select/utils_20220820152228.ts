export function getScrollParent(element: HTMLElement) {
  let style = window.getComputedStyle(element)
  const excludeStaticParent = style.position === 'absolute'
  const overflowRx = /(auto|scroll)/
  const documentElement = document.documentElement

  if (style.position === 'fixed') {
    return documentElement
  }

  // @ts-ignore
  for (let parent = element; (parent = parent.parentElement); ) {
    style = window.getComputedStyle(parent)
    if (excludeStaticParent && style.position === 'static') {
      continue
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
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
