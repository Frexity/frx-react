import { useContext } from 'react'
import { SelectContext } from './Context'

interface ListLoadingIndicatorProps {
  ListLoadingIndicatorComponent: any
}

export const ListLoadingIndicator = ({ ListLoadingIndicatorComponent }: ListLoadingIndicatorProps) => {
  const { state } = useContext<any>(SelectContext)

  return <ListLoadingIndicatorComponent isVisible={state.isOpen && state.isLoading} />
}
