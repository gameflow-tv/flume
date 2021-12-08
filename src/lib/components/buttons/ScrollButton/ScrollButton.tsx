import React from 'react'
import { Icon } from '../..'
import { useTheme } from '../../../hooks'
import { Button } from './ScrollButton.style'

export type ScrollButtonProps = {
  boxShadowSmall: string
  boxShadowXSmall: string
  borderRadius: string
  color: string
}

export const ScrollButton = () => {
  const theme = useTheme()
  return (
    <Button
      boxShadowXSmall={theme.shadows.xsmall}
      boxShadowSmall={theme.shadows.small}
      borderRadius={theme.shapes.borders.small}
      color={theme.colors.primaryText}
    >
      <Icon icon={'arrow_right'} />
    </Button>
  )
}
