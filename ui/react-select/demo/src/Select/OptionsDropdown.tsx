import { SelectContext } from './Context'
import { ReactNode, useContext, useEffect } from 'react'

import { getScrollParent, normalizedHeight, setMenuPosition } from './utils'
import { SelectComponents } from './types'

interface OptionsDropdownProps {
  children: ReactNode
  OptionsDropdownComponent: SelectComponents['OptionsDropdown']
}

export const OptionsDropdown = ({ children, OptionsDropdownComponent }: OptionsDropdownProps) => {
  const { state } = useContext<any>(SelectContext)

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

  const styles = {
    position: 'fixed' as const,
    display: state.isOpen ? 'block' : 'none',
    zIndex: 1,
  }

  return OptionsDropdownComponent ? (
    <OptionsDropdownComponent dropdownStyles={styles}>{children}</OptionsDropdownComponent>
  ) : (
    <div style={styles} id={state.dropdownElementId}>
      {children}
    </div>
  )
}
