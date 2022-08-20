import { ComponentType, CSSProperties, ReactNode } from 'react'

interface AsyncOptions {
  url: string
  startPage?: number
  perPage?: number
  queryAttribute?: string
  labelAttribute?: string
  valueAttribute?: string
  loadOnMount?: boolean
}

export interface OptionType {
  label: string
  value: string
}

export interface SelectComponents {
  Option: ComponentType<OptionComponentProps>
  Control: ComponentType<ControlComponentProps>
  ClearIndicator?: ComponentType<ClearIndicatorComponentProps>
  ControlLoadingIndicator?: ComponentType<ControlLoadingIndicatorComponentProps>
  ListLoadingIndicator?: ComponentType<ListLoadingIndicatorComponentProps>
}

export interface SelectProps {
  valueFormatter?: (value: string) => string | null
  options: OptionType[] | undefined
  components: SelectComponents
  optionsDropdownProps?: any // TODO: remove?
  optionsListProps?: {
    maxHeight: number
  }
  asyncOptions?: AsyncOptions
  canSelectMultipleValues?: boolean
}

export interface ClearIndicatorComponentProps {
  clearIndicatorContainerStyles: CSSProperties
  onClick: () => void
  selectedValues: string
}

export interface OptionComponentProps {
  isSelected: boolean
  label: string
  onSelect: () => void
}

export interface ListLoadingIndicatorComponentProps {
  isVisible: boolean
}

export interface ControlLoadingIndicatorComponentProps {
  isVisible: boolean
}

export interface ControlComponentProps {
  controlStyles: any
  children: ReactNode
}
