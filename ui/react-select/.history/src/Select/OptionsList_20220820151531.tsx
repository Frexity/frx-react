import { SelectContext } from './Context'
import { useContext, memo, useCallback, useEffect, PropsWithChildren } from 'react'
import { scrollIsAtBottom } from './utils'

interface InnerOptionsListProps {
  isAsync: boolean
  optionsListProps: any
  onReachedBottom: (() => void) | undefined
  listElementId: string
}

const InnerOptionsList = memo(
  ({
    children,
    isAsync,
    optionsListProps,
    onReachedBottom,
    listElementId,
  }: PropsWithChildren<InnerOptionsListProps>) => {
    console.warn('render InnerOptionsList')

    useEffect(() => {
      if (!isAsync) {
        return
      }
      const element = document.getElementById(listElementId)
      if (!element) {
        return
      }

      function checkIfAtBottom() {
        if (element && scrollIsAtBottom(element)) {
          onReachedBottom && onReachedBottom()
        }
        return
      }
      element.addEventListener('scroll', checkIfAtBottom)

      return () => {
        element.removeEventListener('scroll', checkIfAtBottom)
      }
    }, [onReachedBottom, listElementId, isAsync])

    return (
      <div
        id={listElementId}
        style={{
          maxHeight: optionsListProps?.maxHeight || 'unset',
          overflowY: optionsListProps?.maxHeight ? 'scroll' : 'unset',
        }}
      >
        <ul>{children}</ul>
      </div>
    )
  },
)

interface OptionsListProps {
  isAsync: boolean
  optionsListProps: any
}

export const OptionsList = ({ children, optionsListProps, isAsync }: PropsWithChildren<OptionsListProps>) => {
  const { state, dispatch } = useContext<any>(SelectContext)

  console.warn('render OptionsList')

  const onReachedBottom = useCallback(() => {
    if (state.hasReachedBottom) {
      return
    }
    dispatch({ hasReachedBottom: true })
  }, [dispatch, state.hasReachedBottom])

  return (
    <InnerOptionsList
      isAsync={isAsync}
      optionsListProps={optionsListProps}
      onReachedBottom={isAsync ? onReachedBottom : undefined}
      listElementId={state.listElementId}
    >
      {children}
    </InnerOptionsList>
  )
}
