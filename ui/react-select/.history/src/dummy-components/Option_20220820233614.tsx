import { memo } from 'react'
import { OptionProps } from '../Select/types'

export const Option = memo(({ isSelected, label, onSelect }: OptionProps) => {
  console.warn('Render Custom Option')

  return (
    <div style={{ fontWeight: isSelected ? 'bold' : 'normal' }} onClick={onSelect}>
      {label}
    </div>
  )
})
