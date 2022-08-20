import { memo } from 'react'
import { OptionComponentProps } from '../Select/types'

export const Option = memo(({ isSelected, label, onSelect }: OptionComponentProps) => {
  console.warn('Render Custom Option')

  return (
    <li className="text-gray-900 cursor-pointer py-2 pl-3 pr-9 hover:bg-sky-300" onClick={onSelect}>
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="flex-shrink-0 h-6 w-6 rounded-full"
        />
        <span className={`${isSelected ? 'font-bold text-blue-700' : 'font-normal'} ml-3 block truncate`}>{label}</span>
      </div>
    </li>
  )
})
