import { ComponentType, CSSProperties, ReactNode, SyntheticEvent } from 'react'

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
  MultiValue: ComponentType<MultiValueComponentProps>
  Value: ComponentType<ValueComponentProps>
  ValueContainer: ComponentType<ValueContainerComponentProps>
  Option: ComponentType<OptionComponentProps>
  Control: ComponentType<ControlComponentProps>
  ClearIndicator?: ComponentType<ClearIndicatorComponentProps>
  ControlLoadingIndicator?: ComponentType<ControlLoadingIndicatorComponentProps>
  ListLoadingIndicator?: ComponentType<ListLoadingIndicatorComponentProps>
}

export type ValueFormatterFunction = (value: string) => string

export interface SelectProps {
  selectedValueFormatter?: ValueFormatterFunction
  options: OptionType[] | undefined
  components: SelectComponents
  optionsListProps?: {
    maxHeight: number
  }
  asyncOptions?: AsyncOptions
  canSelectMultipleValues?: boolean
  AsyncHandler?: ComponentType<AsyncHandlerProps>
}

export interface ValueContainerComponentProps {
  children: ReactNode
}

export interface ValueComponentProps {
  value: string
}

export interface MultiValueComponentProps {
  value: string
  onClick: (event: SyntheticEvent) => void
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
  controlStyles: CSSProperties
  children: ReactNode
}

export interface AsyncHandlerProps {
  asyncOptions: SelectProps['asyncOptions']
}
