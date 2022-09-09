import { memo, useCallback, useContext, useMemo } from 'react'
import { SelectContext } from './Context'
import { OptionType, SelectComponents, SelectProps } from './types'
import { toggleValue } from './utils'

interface InnerOptionsProps {
  OptionComponent: SelectComponents['Option']
  onSelect: any
  options: any
  selectedValues: any
  highlightedListIndex: number
}

const InnerOptions = memo(
  ({ highlightedListIndex, selectedValues, options, onSelect, OptionComponent }: InnerOptionsProps) => {
    return (
      <>
        {options.map((option: OptionType, index: number) => {
          const isSelected = Array.isArray(selectedValues)
            ? selectedValues.includes(option.value)
            : selectedValues === option.value

          return (
            <OptionComponent
              key={option.value}
              label={option.label}
              value={option.value}
              isHighlighted={highlightedListIndex === index}
              isSelected={isSelected}
              onSelect={() => {
                onSelect(option.value)
              }}
            />
          )
        })}
      </>
    )
  },
)

interface OptionsProps {
  OptionComponent: SelectComponents['Option']
  EmptyComponent: SelectComponents['Empty']
  canSelectMultipleValues: boolean | undefined
  searchStrategy?: SelectProps['searchStrategy']
}

export const Options = ({ OptionComponent, EmptyComponent, canSelectMultipleValues, searchStrategy }: OptionsProps) => {
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

  const filteredOptions = useMemo(() => {
    const defaultSearchStrategy = (option: OptionType) => {
      if (state.searchTerm) {
        return option.label.includes(state.searchTerm)
      }
    }
    const customSearchStategy = (option: OptionType) => {
      return searchStrategy && searchStrategy(option, state.searchTerm)
    }
    return state.searchTerm?.length > 0
      ? state.options.filter(searchStrategy ? customSearchStategy : defaultSearchStrategy)
      : state.options
  }, [state.searchTerm])

  return filteredOptions.length === 0 ? (
    EmptyComponent ? (
      <EmptyComponent searchTerm={state.searchTerm} />
    ) : (
      <></>
    )
  ) : (
    <InnerOptions
      options={filteredOptions}
      OptionComponent={OptionComponent}
      selectedValues={state.selectedValues}
      onSelect={onSelect}
      highlightedListIndex={state.highlightedListIndex}
    />
  )
}
