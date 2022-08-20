import { memo } from 'react'
import { ClearIndicatorComponentProps } from '../Select/types'

export const ClearIndicator = memo(
  ({ clearIndicatorContainerStyles, onClick, selectedValues }: ClearIndicatorComponentProps) => {
    return (
      <div style={[clearIndicatorContainerStyles, { display: selectedValues ? 'initial' : 'none' }]} onClick={onClick}>
        X
      </div>
    )
  },
)
