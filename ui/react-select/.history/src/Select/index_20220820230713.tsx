import { OptionsDropdown } from './OptionsDropdown'
import { OutsideClickHandler } from './OutsideClickHandler'
import { OptionsList } from './OptionsList'
import { ClearIndicator } from './ClearIndicator'
import { AsyncHandler } from './AsyncHandler'
import { Options } from './Options'
import { Input } from './Input'
import { selectStyles } from './styles'
import { SelectContext, SelectProvider } from './Context'
import { ListLoadingIndicator } from './ListLoadingIndicator'
import { useContext } from 'react'

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
  asyncOptions,
}: Omit<SelectProps, 'options'>) => {
  const { state } = useContext<any>(SelectContext)

  return (
    <>
      <OutsideClickHandler>
        <components.Control controlStyles={selectStyles.control}>
          <Input valueFormatter={valueFormatter} />
          <ClearIndicator ClearIndicatorComponent={components.ClearIndicator} />
          <components.ControlLoadingIndicator isVisible={state.isLoading} />
        </components.Control>
        <OptionsDropdown optionsDropdownProps={optionsDropdownProps}>
          <ListLoadingIndicator ListLoadingIndicatorComponent={components.ListLoadingIndicator} />
          <OptionsList optionsListProps={optionsListProps} isAsync={!!asyncOptions}>
            <Options OptionComponent={components.Option} />
          </OptionsList>
        </OptionsDropdown>
      </OutsideClickHandler>
      <AsyncHandler asyncOptions={asyncOptions} />
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
      <InnerSelect
        valueFormatter={valueFormatter}
        components={components}
        optionsDropdownProps={optionsDropdownProps}
        optionsListProps={optionsListProps}
        asyncOptions
      />
    </SelectProvider>
  )
}
