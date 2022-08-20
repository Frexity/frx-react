import { memo } from 'react'
import { ClearIndicatorComponentProps } from '../Select/types'

export const ClearIndicator = memo(({ clearIndicatorContainerStyles, onClick }: ClearIndicatorComponentProps) => {
  return (
    <div style={clearIndicatorContainerStyles} onClick={onClick}>
      X
    </div>
  )
})
