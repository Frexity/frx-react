import { ComponentType, memo, useCallback, useContext } from 'react'
import { SelectContext } from './Context'
import { OptionType, SelectComponents } from './types'

interface InnerOptionsProps {
  OptionComponent: any
  onSelect: any
  options: any
  selectedValue: any
}

const InnerOptions = memo(({ selectedValue, options, onSelect, OptionComponent }: InnerOptionsProps) => {
  return (
    <>
      {options.map((option: OptionType) => {
        const isSelected = selectedValue === option.value
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
  OptionComponent: ComponentType<SelectComponents['Option']>
}

export const Options = ({ OptionComponent }: OptionsProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const onSelect = useCallback(
    (value: string) => {
      dispatch({ selectedValue: value, isOpen: false })
    },
    [dispatch],
  )

  return (
    <InnerOptions
      options={state.options}
      OptionComponent={OptionComponent}
      selectedValue={state.selectedValue}
      onSelect={onSelect}
    />
  )
}
