import { memo } from 'react'
import { OptionsDropdownComponentProps } from '../../Select/types'

export const OptionsDropdown = memo(({ children, dropdownStyles }: OptionsDropdownComponentProps) => {
  return (
    <ul
      className="mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      style={{ ...dropdownStyles }}
    >
      {children}
    </ul>
  )
})
