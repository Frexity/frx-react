import { memo, useCallback, useContext } from 'react'
import { SelectContext } from './Context'

interface InnerOptionsProps {
  OptionComponent: any
  onSelect: any
  options: any
  selectedValue: any
}

interface OptionType {
  label: string
  value: string
}

const InnerOptions = memo(({ selectedValue, options, onSelect, OptionComponent }: InnerOptionsProps) => {
  console.warn('render InnerOptions')

  return (
    <>
      {options.map((option: OptionType) => {
        const isSelected = selectedValue === option.value
        return OptionComponent ? (
          <OptionComponent
            key={option.value}
            label={option.label}
            value={option.value}
            isSelected={isSelected}
            onSelect={() => {
              onSelect(option.value)
            }}
          />
        ) : (
          <div key={option.value} style={{ fontWeight: isSelected ? 'bold' : 'normal' }}>
            {`<Option> component missing`}
          </div>
        )
      })}
    </>
  )
})

interface OptionsProps {
  OptionComponent: any
}

export const Options = ({ OptionComponent }: OptionsProps) => {
  const { state, dispatch } = useContext<any>(SelectContext)
  console.warn('render Options')

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
