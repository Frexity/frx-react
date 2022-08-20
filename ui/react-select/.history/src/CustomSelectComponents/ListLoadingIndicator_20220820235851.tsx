import { memo } from 'react'
import { ListLoadingIndicatorComponentProps } from '../Select/types'

export const ListLoadingIndicator = memo(({ isVisible }: ListLoadingIndicatorComponentProps) => {
  return isVisible ? (
    <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2 }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="#f00">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18" stroke="#000">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  ) : null
})
