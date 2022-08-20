import { memo } from 'react'
import { ValueContainerComponentProps } from '../Select/types'

export const ValueContainer = memo(({ children }: ValueContainerComponentProps) => {
  return <div style={{ width: 200, backgroundColor: '#pink', height: 32, padding: '0px 10px' }}>{children}</div>
})
