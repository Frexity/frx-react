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
    dispatch({ selectedValues: null })
  }, [dispatch])

  return (
    <ClearIndicatorComponent
      onClick={handleClick}
      selectedValues={state.selectedValues}
      clearIndicatorContainerStyles={selectStyles.clearIndicator}
    />
  )
}
