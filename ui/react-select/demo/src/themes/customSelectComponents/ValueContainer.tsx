import { memo } from 'react'
import { ValueContainerComponentProps } from '../../Select/types'

export const ValueContainer = memo(({ children }: ValueContainerComponentProps) => {
  return <span className="flex items-center">{children}</span>
})
