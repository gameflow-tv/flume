import React, { useContext } from 'react'
import { ButtonProps, getButtonMargins } from '@components/buttons'
import BaseButton from '@components/buttons/BaseButton'
import { ThemeContext } from '@theme'

const PrimaryButton = (props: ButtonProps): JSX.Element => {
  const theme = useContext(ThemeContext)

  const { horizontalMargin, verticalMargin } = getButtonMargins(
    props.size,
    theme
  )

  return (
    <BaseButton
      backgroundColor={theme.colors.primary}
      foregroundColor={theme.colors.onPrimary}
      borderRadius={theme.shapes.borders.small}
      glow={theme.shadows.glow}
      borderColor={theme.colors.buttonBorder}
      typography={theme.typography.button}
      horizontalMargin={horizontalMargin}
      verticalMargin={verticalMargin}
      size={props.size}
    >
      {props.children}
    </BaseButton>
  )
}

export default PrimaryButton
