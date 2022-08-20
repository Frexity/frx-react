import { InnerSelect } from './common'
import { SelectProvider } from './Context'
import { OutsideClickHandler } from './OutsideClickHandler'

export interface SelectProps {
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

export const Select = ({
  valueFormatter,
  options,
  components,
  optionsDropdownProps,
  optionsListProps,
}: Omit<SelectProps, 'asyncOptions'>) => {
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
        />
      </OutsideClickHandler>
    </SelectProvider>
  )
}
