import { ControlProps } from '../Select/types'

export const Control = ({ controlStyles, children }: ControlProps) => {
  return <div style={controlStyles}>{children}</div>
}
