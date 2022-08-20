import { useContext, useCallback, memo } from 'react'
import { SelectContext } from './Context'
import { SelectProps } from './types'

interface InnerInputProps {
  valueFormatter: SelectProps['valueFormatter']
  selectedValues: string
  id: string
  onFocus: () => void
}

const InnerInput = memo(({ valueFormatter, selectedValues, id, onFocus }: InnerInputProps) => {})

export const Input = memo(({ valueFormatter }: Pick<SelectProps, 'valueFormatter'>) => {
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
    <div id={id} onClick={onFocus} style={{ width: 200, backgroundColor: '#fff', height: 24 }}>
      {formattedValue}
    </div>
  )
})
