import { OptionsDropdown } from '../OptionsDropdown'
import { OutsideClickHandler } from '../OutsideClickHandler'
import { OptionsList } from '../OptionsList'
import { ClearIndicator } from '../ClearIndicator'
import { AsyncHandler } from '../AsyncHandler'
import { Options } from '../Options'
import { Input } from '../Input'
import { selectStyles } from '../styles'
import { SelectContext, SelectProvider } from '../Context'
import { useContext } from 'react'

interface SelectProps {
  valueFormatter?: (value: string) => string | null
  options: any
  components: {
    Option: any
    Control: any
    ClearIndicator?: any
    ControlLoadingIndicator?: any
    ListLoadingIndicator?: any
  }
  optionsDropdownProps?: any
  optionsListProps?: any
  asyncOptions?: any
}

const InnerSelect = ({
  valueFormatter,
  components,
  optionsDropdownProps,
  optionsListProps,
  asyncOptions,
}: Omit<SelectProps, 'options'>) => {
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
    </>
  )
}

export const Select = ({
  valueFormatter,
  options,
  components,
  optionsDropdownProps,
  optionsListProps,
  asyncOptions,
}: SelectProps) => {
  // const [o, setO] = useState(options);

  // Test setting options from outside the context/component
  /*
  useEffect(() => {
    setTimeout(() => {
      setO([{ label: "New", value: "x" }]);
    }, 2000);
  }, []);
  console.log({ o });
  */

  return (
    <SelectProvider value={{ options }}>
      <OutsideClickHandler>
        <InnerSelect
          valueFormatter={valueFormatter}
          components={components}
          optionsDropdownProps={optionsDropdownProps}
          optionsListProps={optionsListProps}
          asyncOptions={asyncOptions}
        />
      </OutsideClickHandler>
      <AsyncHandler asyncOptions={asyncOptions} />
    </SelectProvider>
  )
}
