import { PropsWithChildren } from 'react'

interface ControlProps {
  controlStyles: any
}

export const Control = ({ controlStyles, children }: PropsWithChildren<ControlProps>) => {
  return (
    <div
      style={{
        ...controlStyles,
        borderRadius: 5,
        padding: 3,
        backgroundColor: '#d6d6d6',
      }}
    >
      {children}
    </div>
  )
}
