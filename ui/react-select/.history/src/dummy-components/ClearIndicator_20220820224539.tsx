import { memo } from 'react'

interface ClearIndicatorProps {
  clearIndicatorContainerStyles: any
  onClick: () => void
  selectedValue: any
}

export const ClearIndicator = memo(({ clearIndicatorContainerStyles, onClick }: ClearIndicatorProps) => {
  return (
    <div style={clearIndicatorContainerStyles} onClick={onClick}>
      X
    </div>
  )
})
