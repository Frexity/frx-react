import { useContext } from 'react'
import { ClearIndicator } from './ClearIndicator'
import { SelectContext } from './Context'
import { Options } from './Options'
import { OptionsDropdown } from './OptionsDropdown'
import { OptionsList } from './OptionsList'
import { selectStyles } from './styles'
import { SelectProps } from './types'
import { ValueContainer } from './ValueContainer'

const defaultValueFormatter = (value: string) => value

export const InnerSelect = ({
  selectedValueFormatter,
  components,
  optionsListProps,
  asyncOptions,
  AsyncHandler,
  autocomplete,
  canSelectMultipleValues,
  searchStrategy,
}: Omit<SelectProps, 'options'>) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  // state.inputElementId breaks if I refresh Context.tsx
  return (
    <div id={state.inputElementId}>
      <components.Control
        controlStyles={selectStyles.control}
        onClick={() => {
          dispatch({ isOpen: true })
        }}
      >
        <ValueContainer
          selectedValueFormatter={selectedValueFormatter || defaultValueFormatter}
          ValueContainerComponent={components.ValueContainer}
          ValueComponent={components.Value}
          MultiValueComponent={components.MultiValue}
          autocomplete={autocomplete}
        />
        {components.ClearIndicator && <ClearIndicator ClearIndicatorComponent={components.ClearIndicator} />}
        {components.ControlLoadingIndicator && <components.ControlLoadingIndicator isVisible={state.isLoading} />}
      </components.Control>
      <OptionsDropdown OptionsDropdownComponent={components.OptionsDropdown}>
        {components.ListLoadingIndicator && (
          <components.ListLoadingIndicator isVisible={state.isOpen && state.isLoading} />
        )}
        <OptionsList optionsListProps={optionsListProps} isAsync={!!asyncOptions}>
          <Options
            OptionComponent={components.Option}
            EmptyComponent={components.Empty}
            canSelectMultipleValues={canSelectMultipleValues}
            searchStrategy={searchStrategy}
          />
        </OptionsList>
      </OptionsDropdown>
      {AsyncHandler && <AsyncHandler asyncOptions={asyncOptions} />}
    </div>
  )
}
