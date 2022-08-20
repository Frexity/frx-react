import { useContext, useCallback, memo } from 'react'
import { SelectContext } from './Context'
import { SelectProps } from './types'

export const ValueContainer = memo(({ valueFormatter }: Pick<SelectProps, 'valueFormatter'>) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const onFocus = useCallback(() => {
    dispatch({ isOpen: true })
  }, [dispatch])

  const formattedValue = valueFormatter
    ? Array.isArray(state.selectedValues)
      ? state.selectedValues.map(valueFormatter)
      : valueFormatter(state.selectedValues)
    : state.selectedValues

  return (
    <div id={state.inputElementId} onClick={onFocus} style={{ width: 200, backgroundColor: '#fff', height: 24 }}>
      {formattedValue}
    </div>
  )
})
