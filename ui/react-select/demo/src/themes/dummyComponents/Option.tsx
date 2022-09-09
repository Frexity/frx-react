import { memo } from 'react'
import { OptionComponentProps } from '../../Select/types'

export const Option = memo(({ isSelected, label, onSelect, isHighlighted }: OptionComponentProps) => {
  return (
    <div
      style={{ fontWeight: isSelected ? 'bold' : 'normal', textDecoration: isHighlighted ? 'underline' : undefined }}
      onClick={onSelect}
    >
      {label}
    </div>
  )
})
