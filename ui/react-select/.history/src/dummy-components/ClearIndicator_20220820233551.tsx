import { memo } from 'react'
import { ClearIndicatorProps } from '../Select/types'

export const ClearIndicator = memo(({ clearIndicatorContainerStyles, onClick }: ClearIndicatorProps) => {
  return (
    <div style={clearIndicatorContainerStyles} onClick={onClick}>
      X
    </div>
  )
})
