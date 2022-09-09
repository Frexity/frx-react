import { InnerSelect } from './common'
import { SelectProvider } from './Context'
import { OutsideClickHandler } from './OutsideClickHandler'
import { SelectProps } from './types'

export const Select = ({
  selectedValueFormatter,
  options,
  components,
  optionsListProps,
  canSelectMultipleValues,
  autocomplete,
  searchStrategy,
}: Omit<SelectProps, 'asyncOptions' | 'AsyncHandler'>) => {
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
          selectedValueFormatter={selectedValueFormatter}
          components={components}
          optionsListProps={optionsListProps}
          canSelectMultipleValues={canSelectMultipleValues}
          autocomplete={autocomplete}
          searchStrategy={searchStrategy}
        />
      </OutsideClickHandler>
    </SelectProvider>
  )
}
