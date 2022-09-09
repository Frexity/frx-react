import { ChangeEvent, KeyboardEvent, memo, SyntheticEvent, useCallback, useContext } from 'react'
import { SelectContext } from './Context'
import { SelectComponents, SelectProps, ValueFormatterFunction } from './types'
import { toggleValue } from './utils'

interface ValueContainerProps {
  selectedValueFormatter: ValueFormatterFunction
  ValueContainerComponent: SelectComponents['ValueContainer']
  ValueComponent: SelectComponents['Value']
  MultiValueComponent: SelectComponents['MultiValue']
  autocomplete?: boolean
}

const Input = ({ autocomplete }: Pick<SelectProps, 'autocomplete'>) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  const onFocus = useCallback(() => {
    dispatch({ isOpen: true })
  }, [dispatch])

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({ searchTerm: event.target.value })
    },
    [dispatch],
  )

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Tab' || event.key === 'Escape') {
        dispatch({ isOpen: false })
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        dispatch({ isOpen: true, highlightedListIndex: state.highlightedListIndex + 1 })
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        dispatch({ isOpen: true, highlightedListIndex: state.highlightedListIndex - 1 })
      } else if (event.key === 'Enter') {
        event.preventDefault()
        dispatch({ isOpen: !state.isOpen })
      }
    },
    [dispatch, state.highlightedListIndex, state.isOpen],
  )

  return (
    <input
      style={{
        position: 'absolute',
        opacity: state.isOpen ? 1 : 0,
        top: 0,
        background: 'transparent',
        border: 0,
        padding: '0 5px',
      }}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onChange={autocomplete ? onChange : undefined}
      value={(autocomplete && state.searchTerm) || state.selectedValues || undefined}
    />
  )
}

export const ValueContainer = memo(
  ({
    selectedValueFormatter,
    ValueContainerComponent,
    ValueComponent,
    MultiValueComponent,
    autocomplete,
  }: ValueContainerProps) => {
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
      <div onClick={onFocus}>
        <ValueContainerComponent>
          <>
            {!state.selectedValues && <div className="text-gray-500">Please select</div>}
            <div
              style={{
                width: state.isOpen ? 0 : undefined,
                overflow: 'hidden',
              }}
            >
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
            </div>
            <div
              style={{
                opacity: state.isOpen && state.selectedValues ? 1 : 0,
              }}
            >
              <Input autocomplete={autocomplete} />
            </div>
          </>
        </ValueContainerComponent>
      </div>
    )
  },
)
