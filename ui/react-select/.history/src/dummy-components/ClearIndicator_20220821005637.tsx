import { memo } from 'react'
import { ClearIndicatorComponentProps } from '../Select/types'

export const ClearIndicator = memo(({ clearIndicatorContainerStyles, onClick }: ClearIndicatorComponentProps) => {
  return (
    <div
      style={Object.assign(clearIndicatorContainerStyles, { display: state.selectedValues ? 'initial' : 'none' })}
      onClick={onClick}
    >
      X
    </div>
  )
})
