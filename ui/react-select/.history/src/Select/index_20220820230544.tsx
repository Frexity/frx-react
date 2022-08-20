import { OptionsDropdown } from './OptionsDropdown'
import { OutsideClickHandler } from './OutsideClickHandler'
import { OptionsList } from './OptionsList'
import { ClearIndicator } from './ClearIndicator'
import { ControlLoadingIndicator } from './ControlLoadingIndicator'
import { AsyncHandler } from './AsyncHandler'
import { Options } from './Options'
import { Input } from './Input'
import { selectStyles } from './styles'
import { SelectProvider } from './Context'
import { ListLoadingIndicator } from './ListLoadingIndicator'

interface SelectProps {
  valueFormatter?: (value: string) => string | null
  options: any
  components: {
    Option: any
    Control: any
    ClearIndicator: any
    ControlLoadingIndicator: any
    ListLoadingIndicator: any
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
  asyncOptions}: Omit<SelectProps, 'options'>) => {
  return (
<OutsideClickHandler>
        <components.Control controlStyles={selectStyles.control}>
          <Input valueFormatter={valueFormatter} />
          <ClearIndicator ClearIndicatorComponent={components.ClearIndicator} />
          <components.ControlLoadingIndicator ControlLoadingIndicatorComponent={components.ControlLoadingIndicator} />
        </components.Control>
        <OptionsDropdown optionsDropdownProps={optionsDropdownProps}>
          <ListLoadingIndicator ListLoadingIndicatorComponent={components.ListLoadingIndicator} />
          <OptionsList optionsListProps={optionsListProps} isAsync={!!asyncOptions}>
            <Options OptionComponent={components.Option} />
          </OptionsList>
        </OptionsDropdown>
      </OutsideClickHandler>
      <AsyncHandler asyncOptions={asyncOptions} />
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
      <InnerSelect />
    </SelectProvider>
  )
}
