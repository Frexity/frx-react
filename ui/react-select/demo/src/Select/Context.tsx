import React, { useReducer, createContext, useId, useEffect, PropsWithChildren, useMemo } from 'react'

function reducer(state: any, action: any) {
  return { ...state, ...action }
}

const SelectContext = createContext({}) as any

const SelectProvider = ({ children, value }: PropsWithChildren<{ value: any }>) => {
  const inputElementId = useId()
  const listElementId = useId()
  const dropdownElementId = useId()

  const initialState = {
    isOpen: false,
    hasReachedBottom: false,
    isLoading: false,
    inputElementId,
    dropdownElementId,
    listElementId,
    options: value.options,
    selectedValues: null,
    highlightedListIndex: 0,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = useMemo(() => ({ state, dispatch }), [state])

  /*
  TODO:
  - Get scroll ref, to scrollToTop when it opens
  */

  // Update options when they come from the outside
  useEffect(() => {
    dispatch({ options: value.options })
  }, [value.options])

  return <SelectContext.Provider value={store}>{children}</SelectContext.Provider>
}

export { SelectContext, SelectProvider }
