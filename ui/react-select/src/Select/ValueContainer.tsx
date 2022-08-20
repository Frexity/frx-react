import { memo, useCallback, useContext } from 'react'
import { SelectContext } from './Context'
import { SelectComponents, SelectProps } from './types'

interface ValueContainerProps {
  selectedValueFormatter: SelectProps['selectedValueFormatter']
  ValueContainerComponent: SelectComponents['ValueContainer']
}

export const ValueContainer = memo(({ selectedValueFormatter, ValueContainerComponent }: ValueContainerProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const onFocus = useCallback(() => {
    dispatch({ isOpen: true })
  }, [dispatch])

  const formattedValue = selectedValueFormatter
    ? Array.isArray(state.selectedValues)
      ? state.selectedValues.map(selectedValueFormatter)
      : selectedValueFormatter(state.selectedValues)
    : state.selectedValues

  return (
    <div id={state.inputElementId} onClick={onFocus}>
      <ValueContainerComponent>{formattedValue}</ValueContainerComponent>
    </div>
  )
})
