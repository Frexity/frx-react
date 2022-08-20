import { memo } from 'react'

export interface ControlLoadingIndicatorProps {
  isVisible: boolean
}

export const ControlLoadingIndicator = memo(({ isVisible }: ControlLoadingIndicatorProps) => {
  return isVisible ? <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2 }}>Loading...</div> : null
})
