import { useContext } from 'react'
import { ClearIndicator } from './ClearIndicator'
import { SelectContext } from './Context'
import { Options } from './Options'
import { OptionsDropdown } from './OptionsDropdown'
import { OptionsList } from './OptionsList'
import { selectStyles } from './styles'
import { SelectProps } from './types'

export const InnerSelect = ({
  selectedValueFormatter,
  components,
  optionsListProps,
  asyncOptions,
  AsyncHandler,
  canSelectMultipleValues,
}: Omit<SelectProps, 'options'>) => {
  const { state } = useContext<any>(SelectContext)

  return (
    <>
      <components.Control controlStyles={selectStyles.control}>
        <components.ValueContainer selectedValueFormatter={selectedValueFormatter} />
        {components.ClearIndicator && <ClearIndicator ClearIndicatorComponent={components.ClearIndicator} />}
        {components.ControlLoadingIndicator && <components.ControlLoadingIndicator isVisible={state.isLoading} />}
      </components.Control>
      <OptionsDropdown>
        {components.ListLoadingIndicator && (
          <components.ListLoadingIndicator isVisible={state.isOpen && state.isLoading} />
        )}
        <OptionsList optionsListProps={optionsListProps} isAsync={!!asyncOptions}>
          <Options OptionComponent={components.Option} canSelectMultipleValues={canSelectMultipleValues} />
        </OptionsList>
      </OptionsDropdown>
      {AsyncHandler && <AsyncHandler asyncOptions={asyncOptions} />}
    </>
  )
}
