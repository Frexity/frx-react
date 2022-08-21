import { memo, SyntheticEvent, useCallback, useContext } from 'react'
import { SelectContext } from './Context'
import { SelectComponents, ValueFormatterFunction } from './types'
import { toggleValue } from './utils'

interface ValueContainerProps {
  selectedValueFormatter: ValueFormatterFunction
  ValueContainerComponent: SelectComponents['ValueContainer']
  ValueComponent: SelectComponents['Value']
  MultiValueComponent: SelectComponents['MultiValue']
}

export const ValueContainer = memo(
  ({ selectedValueFormatter, ValueContainerComponent, ValueComponent, MultiValueComponent }: ValueContainerProps) => {
    const { state, dispatch } = useContext<any>(SelectContext)

    const onFocus = useCallback(() => {
      dispatch({ isOpen: true })
    }, [dispatch])

    const isArray = Array.isArray(state.selectedValues)

    const handleRemoveValue = useCallback(
      (event: SyntheticEvent, value: string) => {
        event.stopPropagation()
        const newValues = toggleValue({ value, selectedValues: state.selectedValues })
        dispatch({ selectedValues: newValues, isOpen: false })
      },
      [dispatch, state.selectedValues],
    )

    return (
      <div id={state.inputElementId} onClick={onFocus}>
        <ValueContainerComponent>
          {isArray && state.selectedValues ? (
            <>
              {(state.selectedValues as string[]).map((value) => {
                return (
                  <MultiValueComponent
                    value={selectedValueFormatter(value)}
                    onClick={(event) => handleRemoveValue(event, value)}
                  />
                )
              })}
            </>
          ) : (
            state.selectedValues && <ValueComponent value={selectedValueFormatter(state.selectedValues)} />
          )}
        </ValueContainerComponent>
      </div>
    )
  },
)
