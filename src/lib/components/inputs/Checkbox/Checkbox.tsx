import _ from 'lodash'
import React, { ReactNode, useEffect, useState } from 'react'
import { faCheck, faPlus } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TypographyStyle } from '../../../theme'
import { CheckInput, SpanEl, SpanProps, Wrapper } from './Checkbox.styles'
import { useTheme } from '../../../hooks'

export type CheckboxProps = {
  id?: string
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  checkedContent?: ReactNode
  uncheckedContent?: ReactNode
  typography?: TypographyStyle
  width?: string
  height?: string
  checkedBackground?: string
  uncheckedBackground?: string
  uncheckedBorder?: string
  checkedTextColor?: string
  uncheckedTextColor?: string
}

export const Checkbox = ({
  id = _.uniqueId(),
  checked = false,
  checkedContent = <FontAwesomeIcon icon={faCheck} />,
  uncheckedContent = <FontAwesomeIcon icon={faPlus} />,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    props.onChange && props.onChange.call(isChecked)
  }, [isChecked])

  const theme = useTheme()

  const styles: SpanProps = {
    typography: props.typography || theme.typography.body2,
    checkedBackground: props.checkedBackground || theme.colors.checkedBackground,
    uncheckedBackground: props.uncheckedBackground || theme.colors.background,
    uncheckedBorder: props.uncheckedBorder || theme.colors.uncheckedBorder,
    checkedTextColor: props.checkedTextColor || theme.colors.checkedText,
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
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        {...styles}
      />
      <SpanEl {...styles}>{isChecked ? checkedContent : uncheckedContent}</SpanEl>
    </Wrapper>
  )
}
