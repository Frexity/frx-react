import { memo } from 'react'
import { ClearIndicatorComponentProps } from '../Select/types'

export const ClearIndicator = memo(
  ({ clearIndicatorContainerStyles, onClick, selectedValues }: ClearIndicatorComponentProps) => {
    return (
      <div
        style={Object.assign(clearIndicatorContainerStyles, { display: selectedValues ? 'initial' : 'none' })}
        onClick={onClick}
      >
        X
      </div>
    )
  },
)
