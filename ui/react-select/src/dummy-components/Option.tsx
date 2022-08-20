import { memo } from 'react'
import { OptionComponentProps } from '../Select/types'

export const Option = memo(({ isSelected, label, onSelect }: OptionComponentProps) => {
  return (
    <div style={{ fontWeight: isSelected ? 'bold' : 'normal' }} onClick={onSelect}>
      {label}
    </div>
  )
})
