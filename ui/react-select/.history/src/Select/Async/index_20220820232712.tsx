import { SelectProps } from '..'
import { AsyncHandler } from '../AsyncHandler'
import { InnerSelect } from '../common'
import { SelectProvider } from '../Context'
import { OutsideClickHandler } from '../OutsideClickHandler'

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
          AsyncHandler={AsyncHandler}
        />
      </OutsideClickHandler>
    </SelectProvider>
  )
}