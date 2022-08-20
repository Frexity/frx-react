import { ReactNode } from 'react'

export interface SelectProps {
  valueFormatter?: (value: string) => string | null
  options: any
  components: {
    Option: ReactNode
    Control: ReactNode
    ClearIndicator?: ReactNode
    ControlLoadingIndicator?: ReactNode
    ListLoadingIndicator?: ReactNode
  }
  optionsDropdownProps?: any
  optionsListProps?: any
  asyncOptions?: any
}

export interface ClearIndicatorProps {
  clearIndicatorContainerStyles: any
  onClick: () => void
  selectedValue: any
}

export interface OptionProps {
  isSelected: boolean
  label: string
  onSelect: () => void
}

export interface ListLoadingIndicatorProps {
  isVisible: boolean
}

export interface ControlLoadingIndicatorProps {
  isVisible: boolean
}

export interface ControlProps {
  controlStyles: any
  children: ReactNode
}
