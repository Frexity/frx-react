import { memo } from 'react'
import { ValueContainerComponentProps } from '../../Select/types'

export const ValueContainer = memo(({ children }: ValueContainerComponentProps) => {
  return <div style={{ width: 200, backgroundColor: '#f6f6f6', minHeight: 24, padding: '5px 10px' }}>{children}</div>
})
