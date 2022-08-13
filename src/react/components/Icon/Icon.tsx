import { FC } from 'react'
import { IconData, IconName } from './data'

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge'

export interface IconProps {
  /**
   * The icon to display
   */
  icon: IconName
  /**
   * The fill color of the icon
   */
  color?: string

  /**
   * The size of the icon, either as an pre-defined `IconSize` or arbitrary CSS size value
   */
  size?: IconSize | string

  /**
   * Whether the icon should be displayed inline (inherits size)
   */
  inline?: boolean

  /**
   * If true, the icon will be filled
   */
  filled?: boolean

  /**
   * Additional class names to apply to the element
   */
  className?: string
}

// Tailwind classes for the icon sizes
const sizeMap = {
  small: 'w-[0.75rem] h-[0.75rem]',
  medium: 'w-[1rem] h-[1rem]',
  large: 'w-[1.5rem] h-[1.5rem]',
  xlarge: 'w-[2rem] h-[2rem]',
}

/**
 * Component for displaying a Flume icon
 *
 * @component
 * @example
 * return <Icon icon="eye" size="large" />
 */
export const Icon: FC<IconProps> = (props) => {
  const { icon, color, size = 'medium', inline = false, filled = false, className } = props
  let iconName = icon

  if (filled && !icon.includes('filled') && `${icon}_filled` in IconData) {
    iconName += '_filled'
  }

  return (
    <span
      className={`inline-flex self-center align-middle ${!color && 'text-body'} ${
        sizeMap[size]
      } ${className}`}>
      <svg
        className={`relative ${inline && 'text-inherit'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color ?? 'currentColor'}>
        <path d={IconData[iconName as IconName]} style={{ fillRule: 'evenodd' }} />
      </svg>
    </span>
  )
}
