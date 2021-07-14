import { faArrowRight } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../theme'
import { Button } from './ScrollButton.style'

export type ScrollButtonProps = {
  boxShadowSmall: string
  boxShadowXSmall: string
  borderRadius: string
  color: string
}

export const ScrollButton = () => {
<<<<<<< HEAD
  const theme = useContext(ThemeContext)
  return (
    <Button
      boxShadowXSmall={theme.shadows.xsmall}
      boxShadowSmall={theme.shadows.small}
      borderRadius={theme.shapes.borders.small}
      color={theme.colors.primaryText}>
=======
  return (
    <Button>
>>>>>>> 58a45c7 (prettier)
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  )
}
