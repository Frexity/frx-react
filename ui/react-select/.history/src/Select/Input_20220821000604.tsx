import { useContext, useCallback, memo } from 'react'
import { SelectContext } from './Context'

interface InnerInputProps {
  valueFormatter: any
  selectedValue: any
  id: any
  onBlur?: any
  onFocus: any
}

const InnerInput = memo(({ valueFormatter, selectedValue, id, onBlur, onFocus }: InnerInputProps) => {


  const formattedValue = valueFormatter ? valueFormatter(selectedValue) : selectedValue

  return (
    <div className="holder">
      <input
        id={id}
        type="text"
        placeholder="hej"
        onFocus={onFocus}
        onBlur={onBlur}
        value={formattedValue || ''}
        onChange={() => {
          return
        }}
      />
    </div>
  )
})

interface InputProps {
  valueFormatter: any
}

export const Input = memo(({ valueFormatter }: InputProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)



  const onFocus = useCallback(() => {
    dispatch({ isOpen: true })
  }, [dispatch])

  return (
    <InnerInput
      selectedValue={state.selectedValue}
      id={state.inputElementId}
      onFocus={onFocus}
      valueFormatter={valueFormatter}
    />
  )
})
