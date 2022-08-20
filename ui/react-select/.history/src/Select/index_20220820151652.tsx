import { OptionsDropdown } from './OptionsDropdown'
import { OutsideClickHandler } from './OutsideClickHandler'
import { OptionsList } from './OptionsList'
import { ClearIndicator } from './ClearIndicator'
import { ControlLoadingIndicator } from './ControlLoadingIndicator'
import { Control } from './Control'
import { AsyncHandler } from './AsyncHandler'
import { Options } from './Options'
import { Input } from './Input'
import { selectStyles } from './styles'
import { SelectProvider } from './Context'
import { ListLoadingIndicator } from './ListLoadingIndicator'

interface SelectProps {
  valueFormatter?: (value: string) => string | null
  options: any
  components: any
  optionsDropdownProps?: any
  optionsListProps?: any
  asyncOptions?: any
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

  const ControlComponent = components.Control ? components.Control : Control

  return (
    <SelectProvider value={{ options }}>
      <OutsideClickHandler>
        <ControlComponent controlStyles={selectStyles.control}>
          <Input valueFormatter={valueFormatter} />
          <ClearIndicator ClearIndicatorComponent={components.ClearIndicator} />
          <ControlLoadingIndicator ControlLoadingIndicatorComponent={components.ControlLoadingIndicator} />
        </ControlComponent>
        <OptionsDropdown optionsDropdownProps={optionsDropdownProps}>
          <ListLoadingIndicator ListLoadingIndicatorComponent={components.ListLoadingIndicator} />
          <OptionsList optionsListProps={optionsListProps} isAsync={!!asyncOptions}>
            <Options OptionComponent={components.Option} />
          </OptionsList>
        </OptionsDropdown>
      </OutsideClickHandler>
      <AsyncHandler asyncOptions={asyncOptions} />
    </SelectProvider>
  )
}
