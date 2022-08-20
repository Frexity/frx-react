import { useRef, useEffect } from 'react'
import { useContext, memo, ReactNode } from 'react'
import { SelectContext } from './Context'

interface OutsideClickHandlerProps {
  children: ReactNode
}

const useOutsideClick = (callback: any) => {
  const ref = useRef<any>()

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick, true)

    return () => {
      document.removeEventListener('mousedown', handleClick, true)
    }
  }, [ref, callback])

  return ref
}

export const OutsideClickHandler = memo(({ children }: OutsideClickHandlerProps) => {
  const { dispatch } = useContext<any>(SelectContext)

  const ref = useOutsideClick(() => {
    dispatch({ isOpen: false })
  })

  return <span ref={ref}>{children}</span>
})
