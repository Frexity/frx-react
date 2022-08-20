import { useContext } from 'react'
import { SelectProps } from './index'
import { ClearIndicator } from './ClearIndicator'
import { SelectContext } from './Context'
import { Input } from './Input'
import { Options } from './Options'
import { OptionsDropdown } from './OptionsDropdown'
import { OptionsList } from './OptionsList'
import { selectStyles } from './styles'

export const InnerSelect = ({
  valueFormatter,
  components,
  optionsDropdownProps,
  optionsListProps,
  asyncOptions,
  AsyncHandler,
}: Omit<SelectProps, 'options'> & { AsyncHandler?: any }) => {
  const { state } = useContext<any>(SelectContext)

  return (
    <>
      <components.Control controlStyles={selectStyles.control}>
        <Input valueFormatter={valueFormatter} />
        {components.ClearIndicator && <ClearIndicator ClearIndicatorComponent={components.ClearIndicator} />}
        {components.ControlLoadingIndicator && <components.ControlLoadingIndicator isVisible={state.isLoading} />}
      </components.Control>
      <OptionsDropdown optionsDropdownProps={optionsDropdownProps}>
        {components.ListLoadingIndicator && (
          <components.ListLoadingIndicator isVisible={state.isOpen && state.isLoading} />
        )}
        <OptionsList optionsListProps={optionsListProps} isAsync={!!asyncOptions}>
          <Options OptionComponent={components.Option} />
        </OptionsList>
      </OptionsDropdown>
      {AsyncHandler && <AsyncHandler asyncOptions={asyncOptions} />}
    </>
  )
}
