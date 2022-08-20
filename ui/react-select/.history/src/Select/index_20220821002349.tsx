import { InnerSelect } from './common'
import { SelectProvider } from './Context'
import { OutsideClickHandler } from './OutsideClickHandler'
import { SelectProps } from './types'

export const Select = ({
  valueFormatter,
  options,
  components,
  optionsDropdownProps,
  optionsListProps,
  canSelectMultipleValues,
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
          canSelectMultipleValues={canSelectMultipleValues}
        />
      </OutsideClickHandler>
    </SelectProvider>
  )
}
