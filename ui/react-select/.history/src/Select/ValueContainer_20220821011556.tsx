import { useContext, useCallback, memo } from 'react'
import { SelectContext } from './Context'
import { SelectProps } from './types'

export const ValueContainer = memo(
  ({ selectedValueFormatter, ValueContainerComponent }: Pick<SelectProps, 'selectedValueFormatter'>) => {
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
      <div id={state.inputElementId} onClick={onFocus} style={{ width: 200, backgroundColor: '#fff', height: 24 }}>
        <ValueContainerComponent>{formattedValue}</ValueContainerComponent>
      </div>
    )
  },
)
