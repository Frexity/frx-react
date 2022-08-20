import { memo, useCallback, useContext } from 'react'
import { SelectContext } from './Context'
import { OptionType, SelectComponents } from './types'
import { toggleValue } from './utils'

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
        const isSelected = Array.isArray(selectedValues)
          ? selectedValues.includes(option.value)
          : selectedValues === option.value
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

export const Options = ({ OptionComponent, canSelectMultipleValues }: OptionsProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const onSelect = useCallback(
    (value: string) => {
      if (canSelectMultipleValues) {
        const newValues = toggleValue({ value, selectedValues: state.selectedValues })
        dispatch({ selectedValues: newValues, isOpen: false })
        return
      }
      dispatch({ selectedValues: value, isOpen: false })
    },
    [dispatch, state.selectedValues, canSelectMultipleValues],
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
