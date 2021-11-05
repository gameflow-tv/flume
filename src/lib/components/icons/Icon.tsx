import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks'
import { IconData, Icons } from './data'

export const IconSize = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.5rem',
  xlarge: '2rem'
}

export type IconProps = {
  icon?: keyof Icons | string
  color?: string
  size?: keyof typeof IconSize | string
  inline?: boolean
  filled?: boolean
}

const _Icon = styled.div<{ size?: string; inline?: boolean }>`
  display: inline-flex;
  align-self: center;
  width: ${(props) => props.size ?? IconSize.medium};
  height: ${(props) => props.size ?? IconSize.medium};

  & > svg {
    font-size: ${(props) => (props.inline ? 'inherit' : props.size ?? IconSize.medium)};
  }
`

export const Icon = ({ icon, color, size, inline, filled }: IconProps) => {
  const theme = useTheme()

  let s

  if (size in IconSize) {
    s = IconSize[size]
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
        fill={color ? color : theme.colors.primaryText}
      >
        <path d={IconData[icon as keyof Icons]} style={{ fillRule: 'evenodd' }} />
      </svg>
    </_Icon>
  )
}
