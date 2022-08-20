import { ComponentType, useCallback, useContext } from 'react'
import { SelectContext } from './Context'

import { selectStyles } from './styles'
import { ClearIndicatorComponentProps } from './types'

interface ClearIndicatorProps {
  ClearIndicatorComponent: ComponentType<ClearIndicatorComponentProps>
}

export const ClearIndicator = ({ ClearIndicatorComponent }: ClearIndicatorProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const handleClick = useCallback(() => {
    dispatch({ selectedValue: null })
  }, [dispatch])

  return (
    <span style={{ display: state.selectedValues ? 'initial' : 'none' }}>
      <ClearIndicatorComponent
        onClick={handleClick}
        selectedValue={state.selectedValue}
        clearIndicatorContainerStyles={selectStyles.clearIndicator}
      />
    </span>
  )
}
