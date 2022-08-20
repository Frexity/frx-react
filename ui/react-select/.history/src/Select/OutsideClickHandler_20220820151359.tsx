import { useOutsideClick } from './hooks'

import { useContext, memo, ReactNode } from 'react'
import { SelectContext } from './Context'

interface OutsideClickHandlerProps {
  children: ReactNode
}

export const OutsideClickHandler = memo(({ children }: OutsideClickHandlerProps) => {
  const { dispatch } = useContext<any>(SelectContext)

  const ref = useOutsideClick(() => {
    dispatch({ isOpen: false })
  })

  return <span ref={ref}>{children}</span>
})
