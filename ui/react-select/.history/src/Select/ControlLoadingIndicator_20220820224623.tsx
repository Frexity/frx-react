import { useContext } from 'react'
import { SelectContext } from './Context'

interface ControlLoadingIndicatorProps {
  ControlLoadingIndicatorComponent: any
}

export const ControlLoadingIndicator = ({ ControlLoadingIndicatorComponent }: ControlLoadingIndicatorProps) => {
  const { state } = useContext<any>(SelectContext)

  return <ControlLoadingIndicatorComponent isVisible={state.isLoading} />
}
