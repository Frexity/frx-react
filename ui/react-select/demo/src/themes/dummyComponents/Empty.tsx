import { memo } from 'react'
import { EmptyComponentProps } from '../../Select/types'

export const Empty = memo(({ searchTerm }: EmptyComponentProps) => {
  return <div>No results for '{searchTerm}'</div>
})
