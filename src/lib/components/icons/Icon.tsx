import styled from 'styled-components'
import { useTheme } from '../../hooks'
import { IconData, IconName } from './data'

export const IconSizes = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.5rem',
  xlarge: '2rem'
}

export type IconSize = keyof typeof IconSizes

export type IconProps = {
  icon: IconName
  color?: string
  size?: IconSize | string
  inline?: boolean
  filled?: boolean
}

const _Icon = styled.div<{ size: string; inline?: boolean }>`
  display: inline-flex;
  align-self: center;
  vertical-align: middle;
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  & > svg {
    position: relative;
    font-size: ${(props) => (props.inline ? 'inherit' : props.size)};
  }
`

export const Icon = ({
  icon,
  color,
  size = 'medium',
  inline = false,
  filled = false
}: IconProps) => {
  const theme = useTheme()

  let s: string

  if (size in IconSizes) {
    s = IconSizes[size]
  } else {
    s = size
  }

  if (filled && !icon.includes('filled') && icon + '_filled' in IconData) {
    icon += '_filled'
  }

  return (
    <_Icon size={s} inline={inline}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        fill={color ? color : theme.colors.header}
      >
        <path d={IconData[icon as IconName]} style={{ fillRule: 'evenodd' }} />
      </svg>
    </_Icon>
  )
}
