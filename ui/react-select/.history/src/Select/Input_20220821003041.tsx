import { useContext, useCallback, memo } from 'react'
import { SelectContext } from './Context'
import { SelectProps } from './types'

interface InnerInputProps {
  valueFormatter: SelectProps['valueFormatter']
  selectedValues: string
  id: string
  onFocus: () => void
}

const InnerInput = memo(({ valueFormatter, selectedValues, id, onFocus }: InnerInputProps) => {
  const formattedValue = valueFormatter ? valueFormatter(selectedValues) : selectedValues

  return (
    <div className="holder">
      <input
        id={id}
        type="text"
        placeholder="hej"
        onFocus={onFocus}
        value={formattedValue || ''}
        onChange={() => {
          return
        }}
      />
    </div>
  )
})

export const Input = memo(({ valueFormatter }: Pick<SelectProps, 'valueFormatter'>) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const onFocus = useCallback(() => {
    dispatch({ isOpen: true })
  }, [dispatch])

  return (
    <InnerInput
      selectedValues={state.selectedValues}
      id={state.inputElementId}
      onFocus={onFocus}
      valueFormatter={valueFormatter}
    />
  )
})
