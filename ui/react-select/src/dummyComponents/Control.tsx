import { ControlComponentProps } from '../Select/types'

export const Control = ({ controlStyles, children }: ControlComponentProps) => {
  return <div style={controlStyles}>{children}</div>
}
