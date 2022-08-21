import { memo } from 'react'
import { MultiValueComponentProps } from '../Select/types'

export const MultiValue = memo(({ value }: MultiValueComponentProps) => {
  return <span style={{ color: 'blue' }}>{value}</span>
})
