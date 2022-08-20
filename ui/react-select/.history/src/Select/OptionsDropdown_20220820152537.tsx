import { SelectContext } from './Context'
import { ReactNode, useContext, useEffect } from 'react'

import { getScrollParent, normalizedHeight, setMenuPosition } from './utils'

interface OptionsDropdownProps {
  children: ReactNode
  optionsDropdownProps?: any
}

export const OptionsDropdown = ({ children }: OptionsDropdownProps) => {
  const { state } = useContext<any>(SelectContext)

  console.warn('render OptionsDropdown')

  // TODO: Reposition on window resize
  useEffect(() => {
    // TODO: Get unique ID instead
    const dropdown = document.getElementById(state.dropdownElementId)
    if (!dropdown) {
      return
    }

    const input = document.getElementById(state.inputElementId)
    if (!input) {
      return
    }
    if (!state.isOpen) {
      dropdown.style.display = 'none'
      return
    }

    const parent = getScrollParent(input)

    const style = getComputedStyle(input)

    const borderTopWidth = parseInt(style.borderTopWidth, 10) || 0
    const borderLeftWidth = parseInt(style.borderLeftWidth, 10) || 0
    const borderBottomWidth = parseInt(style.borderBottomWidth, 10) || 0
    const inputHeight = normalizedHeight(input) + borderTopWidth + borderBottomWidth

    setMenuPosition(dropdown, input, inputHeight, borderLeftWidth)

    function scrollEventHandler(this: HTMLElement) {
      if (!dropdown) {
        return
      }
      setMenuPosition(dropdown, this, inputHeight, borderLeftWidth)
    }

    parent.addEventListener('scroll', scrollEventHandler.bind(input))

    dropdown.style.display = 'initial'
  }, [state.isOpen, state.inputElementId, state.dropdownElementId])

  return (
    <div className="dropdown" id={state.dropdownElementId}>
      {children}
    </div>
  )
}
