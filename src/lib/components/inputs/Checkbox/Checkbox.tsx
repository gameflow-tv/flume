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
import { useAmbiance, useTheme } from '../../../hooks'
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
  const ambiance = useAmbiance()

  const styles: SpanProps = {
    typography: props.typography || theme.typography.body2,
    checkedBackground: props.checkedBackground || theme.colors.primary,
    uncheckedBackground: props.uncheckedBackground || ambiance.color,
    uncheckedBorder: props.uncheckedBorder || ambiance.child.color,
    checkedBorder: props.checkedBorder || theme.colors.onPrimary,
    checkedTextColor: props.checkedTextColor || theme.colors.onPrimary,
    uncheckedTextColor: props.uncheckedTextColor || theme.colors.header,
    width: props.width,
    height: props.height,
    spacing: theme.spacing.xxsmall,
    ...props
  }

  uncheckedContent ??= <Icon icon="plus" color={styles.uncheckedTextColor} />
  checkedContent ??= <Icon icon="check" color={styles.checkedTextColor} />

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
