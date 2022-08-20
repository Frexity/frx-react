import { memo, useCallback, useContext } from 'react'
import { SelectContext } from './Context'
import { OptionType, SelectComponents } from './types'

interface InnerOptionsProps {
  OptionComponent: any
  onSelect: any
  options: any
  selectedValues: any
}

const InnerOptions = memo(({ selectedValues, options, onSelect, OptionComponent }: InnerOptionsProps) => {
  return (
    <>
      {options.map((option: OptionType) => {
        const isSelected = selectedValues === option.value
        return (
          <OptionComponent
            key={option.value}
            label={option.label}
            value={option.value}
            isSelected={isSelected}
            onSelect={() => {
              onSelect(option.value)
            }}
          />
        )
      })}
    </>
  )
})

interface OptionsProps {
  OptionComponent: SelectComponents['Option']
  canSelectMultipleValues: boolean | undefined
}

function toggleValue({ value, selectedValues }: { value: string, selectedValues: string[]) {
  if (selectedValues.includes(value)) {
    return selectedValues.filter((v) => v !== value)
  }
  return [...selectedValues, value]
}

export const Options = ({ OptionComponent, canSelectMultipleValues }: OptionsProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const onSelect = useCallback(
    (value: string) => {
      if (canSelectMultipleValues) {
        dispatch({
          type: 'setSelectedValues',
          payload: toggleValue({ value, selectedValues: state.selectedValues }),
        })
        return
      }
      dispatch({ selectedValues: value, isOpen: false })
    },
    [dispatch],
  )

  return (
    <InnerOptions
      options={state.options}
      OptionComponent={OptionComponent}
      selectedValues={state.selectedValues}
      onSelect={onSelect}
    />
  )
}
