import { memo } from 'react'
import { MultiValueComponentProps } from '../Select/types'

export const MultiValue = memo(({ value, onClick }: MultiValueComponentProps) => {
  return (
    <span style={{ color: 'blue', display: 'inline-block', backgroundColor: '#ccc', margin: 2 }}>
      {value} <span onClick={onClick}>X</span>
    </span>
  )
})
