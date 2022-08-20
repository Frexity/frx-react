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
