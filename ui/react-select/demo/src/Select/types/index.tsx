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
  Empty?: ComponentType<EmptyComponentProps>
  OptionsDropdown?: ComponentType<OptionsDropdownComponentProps>
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
  autocomplete?: boolean
  searchStrategy?: (option: OptionType, searchTerm: string) => boolean
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
  value: string
  isHighlighted: boolean
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
  onClick: () => void
}

export interface AsyncHandlerProps {
  asyncOptions: SelectProps['asyncOptions']
}

export interface EmptyComponentProps {
  searchTerm: string
}

export interface OptionsDropdownComponentProps {
  children: ReactNode
  dropdownStyles: CSSProperties
  dropdownProps: { id: string }
}
