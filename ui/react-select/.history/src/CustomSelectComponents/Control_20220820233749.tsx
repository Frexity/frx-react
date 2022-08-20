import { ControlProps } from '../Select/types'

export const Control = ({ controlStyles, children }: ControlProps) => {
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
