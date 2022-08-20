import { useContext, useCallback, memo } from 'react'
import { SelectContext } from './Context'

import { selectStyles } from './styles'

interface InnerClearIndicatorProps {
  clearIndicatorContainerStyles: any
  onClick: () => void
  selectedValue: any
}

const InnerClearIndicator = memo(({ clearIndicatorContainerStyles, onClick }: InnerClearIndicatorProps) => {
  return (
    <div style={clearIndicatorContainerStyles} onClick={onClick}>
      X
    </div>
  )
})

interface ClearIndicatorProps {
  ClearIndicatorComponent: any
}

export const ClearIndicator = ({ ClearIndicatorComponent }: ClearIndicatorProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const handleClick = useCallback(() => {
    dispatch({ selectedValue: null })
  }, [dispatch])

  return (
    <span style={{ display: state.selectedValue ? 'initial' : 'none' }}>
      <ClearIndicatorComponent
        onClick={handleClick}
        selectedValue={state.selectedValue}
        clearIndicatorContainerStyles={selectStyles.clearIndicator}
      />
    </span>
  )
}
