import { PropsWithChildren } from 'react'

interface ControlProps {
  controlStyles: any
}

export const Control = ({ controlStyles, children }: PropsWithChildren<ControlProps>) => {
  return <div style={controlStyles}>{children}</div>
}
