import { memo } from 'react'

interface ListLoadingIndicatorProps {
  isVisible: boolean
}

export const ListLoadingIndicator = memo(({ isVisible }: ListLoadingIndicatorProps) => {
  return isVisible ? <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2 }}>Loading...</div> : null
})
