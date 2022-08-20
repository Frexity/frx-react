import { CSSProperties, memo } from 'react'
import { ClearIndicatorComponentProps } from '../Select/types'

export const ClearIndicator = memo(
  ({ clearIndicatorContainerStyles, onClick, selectedValues }: ClearIndicatorComponentProps) => {
    return (
      <div
        style={[clearIndicatorContainerStyles, { display: selectedValues ? 'initial' : 'none' } as CSSProperties]}
        onClick={onClick}
      >
        X
      </div>
    )
  },
)
