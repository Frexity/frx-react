import { SelectProps } from '../types'
import { AsyncHandler } from './AsyncHandler'
import { InnerSelect } from '../common'
import { SelectProvider } from '../Context'
import { OutsideClickHandler } from '../OutsideClickHandler'

export const AsyncSelect = ({
  selectedValueFormatter,
  options,
  components,
  optionsListProps,
  asyncOptions,
}: SelectProps) => {
  return (
    <SelectProvider value={{ options }}>
      <OutsideClickHandler>
        <InnerSelect
          selectedValueFormatter={selectedValueFormatter}
          components={components}
          optionsListProps={optionsListProps}
          asyncOptions={asyncOptions}
          AsyncHandler={AsyncHandler}
        />
      </OutsideClickHandler>
    </SelectProvider>
  )
}
