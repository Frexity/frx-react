import { memo } from 'react'
import { ValueContainerComponentProps } from '../Select/types'

export const ValueContainer = memo(({ children }: ValueContainerComponentProps) => {
  return <div style={{ width: 200, backgroundColor: '#fff', minHeight: 24 }}>{children}</div>
})
