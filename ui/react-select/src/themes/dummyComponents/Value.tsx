import { memo } from 'react'
import { ValueComponentProps } from '../../Select/types'

export const Value = memo(({ value }: ValueComponentProps) => {
  return <div>{value}</div>
})
