import { ReactNode } from 'react'

interface AsyncOptions {
  url: string
  startPage?: number
  perPage?: number
  queryAttribute?: string
  labelAttribute?: string
  valueAttribute?: string
  loadOnMount?: boolean
}

export interface SelectProps {
  valueFormatter?: (value: string) => string | null
  options: any
  components: {
    Option: any
    Control: any
    ClearIndicator?: any
    ControlLoadingIndicator?: any
    ListLoadingIndicator?: any
  }
  optionsDropdownProps?: any // TODO: remove?
  optionsListProps?: {
    maxHeight: number
  }
  asyncOptions?: AsyncOptions
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
