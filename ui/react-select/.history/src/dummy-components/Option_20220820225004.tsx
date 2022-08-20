import { memo } from 'react'

interface OptionProps {
  isSelected: boolean
  label: string
  onSelect: () => void
}

export const Option = memo(({ isSelected, label, onSelect }: OptionProps) => {
  console.warn('Render Custom Option')

  return (
    <div style={{ fontWeight: isSelected ? 'bold' : 'normal' }} onClick={onSelect}>
      {label}
    </div>
  )
})
