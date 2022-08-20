import { memo, useContext } from 'react'
import { SelectContext } from './Context'

interface InnerControlLoadingIndicatorProps {
  isVisible: boolean
}

const InnerControlLoadingIndicator = memo(({ isVisible }: InnerControlLoadingIndicatorProps) => {
  return isVisible ? <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2 }}>Loading...</div> : null
})

interface ControlLoadingIndicatorProps {
  ControlLoadingIndicatorComponent: any
}

export const ControlLoadingIndicator = ({ ControlLoadingIndicatorComponent }: ControlLoadingIndicatorProps) => {
  const { state } = useContext<any>(SelectContext)

  const LoadingComponent = ControlLoadingIndicatorComponent
    ? ControlLoadingIndicatorComponent
    : InnerControlLoadingIndicator

  return <LoadingComponent isVisible={state.isLoading} />
}
