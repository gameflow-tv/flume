import React from 'react'
import { ButtonProps } from '@components/buttons'
import {
  BaseButtonContent,
  BaseButtonContentProps,
  StyledBaseButton,
  StyledBaseButtonProps,
} from './BaseButton.styles'

export type BaseButtonProps = ButtonProps &
  StyledBaseButtonProps &
  BaseButtonContentProps

const BaseButton = (props: BaseButtonProps) => {
  console.log(props)

  return (
    <StyledBaseButton {...props}>
      <BaseButtonContent {...props}>
        {props.icon}
        {props.children}
      </BaseButtonContent>
    </StyledBaseButton>
  )
}

export default BaseButton
