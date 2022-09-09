import { memo, useState } from 'react'
import { OptionComponentProps } from '../../Select/types'

export const Option = memo(({ isSelected, label, onSelect, isHighlighted }: OptionComponentProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li
      className={`${
        isHighlighted || isHovered || isSelected ? 'text-white bg-indigo-600' : 'text-gray-900'
      } relative cursor-default select-none py-2 pl-3 pr-9`}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <span className={`${isSelected ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}>{label}</span>
      </div>
      {isSelected && (
        <span
          className={`${
            isSelected ? 'text-white' : 'text-indigo-600'
          } absolute inset-y-0 right-0 flex items-center pr-4`}
        >
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      )}
    </li>
  )
})
