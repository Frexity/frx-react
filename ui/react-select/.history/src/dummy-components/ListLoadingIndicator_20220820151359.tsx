import { memo, useContext } from 'react'
import { SelectContext } from './Context'

interface InnerListLoadingIndicatorProps {
  isVisible: boolean
}

const InnerListLoadingIndicator = memo(({ isVisible }: InnerListLoadingIndicatorProps) => {
  return isVisible ? <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2 }}>Loading...</div> : null
})

interface ListLoadingIndicatorProps {
  ListLoadingIndicatorComponent: any
}

export const ListLoadingIndicator = ({ ListLoadingIndicatorComponent }: ListLoadingIndicatorProps) => {
  const { state } = useContext<any>(SelectContext)

  const LoadingComponent = ListLoadingIndicatorComponent ? ListLoadingIndicatorComponent : InnerListLoadingIndicator

  return <LoadingComponent isVisible={state.isOpen && state.isLoading} />
}
