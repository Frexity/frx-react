import { memo } from 'react'
import { OptionsDropdownComponentProps } from '../../Select/types'

export const OptionsDropdown = memo(({ children, dropdownStyles }: OptionsDropdownComponentProps) => {
  return <div style={{ ...dropdownStyles, backgroundColor: '#fff', border: '1px solid black' }}>{children}</div>
})
