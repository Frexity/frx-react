import { PropsWithChildren } from 'react'
import { ControlProps } from '../Select/types'

export const Control = ({ controlStyles, children }: PropsWithChildren<ControlProps>) => {
  return <div style={controlStyles}>{children}</div>
}
