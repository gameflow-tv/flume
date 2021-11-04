import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../hooks'
import { IconData, Icons } from './data'

export type IconProps = {
  icon?: keyof Icons | string
  color?: string
}

const _Icon = styled.div`
  width: 24px;
  height: 24px;
`

export const Icon = ({ icon, color }: IconProps) => {
  const theme = useTheme()

  return (
    <_Icon>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color ? color : theme.colors.primaryText}
      >
        <path d={IconData[icon as keyof Icons]} style={{ fillRule: 'evenodd' }} />
      </svg>
    </_Icon>
  )
}
