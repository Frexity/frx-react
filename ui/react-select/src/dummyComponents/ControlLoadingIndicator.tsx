import { memo } from 'react'
import { ControlLoadingIndicatorComponentProps } from '../Select/types'

export const ControlLoadingIndicator = memo(({ isVisible }: ControlLoadingIndicatorComponentProps) => {
  return isVisible ? <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2 }}>Loading...</div> : null
})
