import _ from 'lodash'
import React, {
  ChangeEventHandler,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'
import { TypographyStyle } from '../../../theme'
import { CheckInput, SpanEl, SpanProps, Wrapper } from './Checkbox.styles'
import { useTheme } from '../../../hooks'
import { Icon } from '../../icons'

export type CheckboxProps = {
  id?: string
  label?: string
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  checkedContent?: ReactNode
  uncheckedContent?: ReactNode
  typography?: TypographyStyle
  width?: string
  height?: string
  checkedBackground?: string
  uncheckedBackground?: string
  uncheckedBorder?: string
  checkedBorder?: string
  checkedTextColor?: string
  uncheckedTextColor?: string
  className?: string
}

export const Checkbox = ({
  id = _.uniqueId(),
  checked,
  checkedContent,
  uncheckedContent,
  ...props
}: CheckboxProps) => {
  const theme = useTheme()

  uncheckedContent ??= <Icon icon="plus" color={theme.colors.primaryText} />
  checkedContent ??= <Icon icon="check" color={props.checkedTextColor || theme.colors.onPrimary} />

  const styles: SpanProps = {
    typography: props.typography || theme.typography.body2,
    checkedBackground: props.checkedBackground || theme.colors.primary,
    uncheckedBackground: props.uncheckedBackground || theme.colors.background,
    uncheckedBorder: props.uncheckedBorder || theme.colors.uncheckedBorder,
    checkedBorder: props.checkedBorder || theme.colors.onPrimary,
    checkedTextColor: props.checkedTextColor || theme.colors.onPrimary,
    uncheckedTextColor: props.uncheckedTextColor || theme.colors.uncheckedText,
    width: props.width,
    height: props.height,
    spacing: theme.spacing.xxsmall,
    ...props
  }

  return (
    <Wrapper {...styles}>
      <CheckInput
        id={id}
        className={props.className}
        checked={checked}
        onChange={props.onChange}
        {...styles}
      />
      <SpanEl {...styles}>{checked ? checkedContent : uncheckedContent}</SpanEl>
    </Wrapper>
  )
}
