import React from 'react'
import {
  BaseButtonContent,
  BaseButtonContentProps,
  StyledBaseButton,
  StyledBaseButtonProps
} from './BaseButton.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type BaseButtonProps = StyledBaseButtonProps &
  BaseButtonContentProps & {
    label?: string
  }

export const BaseButton = (props: BaseButtonProps) => {
  return (
    <StyledBaseButton {...props}>
      <BaseButtonContent {...props}>
        <p>{props.label}</p>
        {props.icon && <FontAwesomeIcon icon={props.icon} />}
      </BaseButtonContent>
    </StyledBaseButton>
  )
}
