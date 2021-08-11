import _ from 'lodash'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { faCheck, faPlus } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext, TypographyStyle } from '../../../theme'
import { CheckInput, SpanEl, SpanProps, Wrapper } from './Checkbox.styles'

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
  onChange,
  checkedContent = <FontAwesomeIcon icon={faCheck} />,
  uncheckedContent = <FontAwesomeIcon icon={faPlus} />,
  typography,
  width,
  height,
  checkedBackground,
  uncheckedBorder,
  checkedTextColor,
  uncheckedTextColor,
  uncheckedBackground
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    onChange?.call(isChecked)
  }, [isChecked])

  const theme = useContext(ThemeContext)
  console.log(theme.typography.body2)
  const styles: SpanProps = {
    typography: typography || theme.typography.body2,
    checkedBackground: checkedBackground || theme.colors.checkedBackground,
    uncheckedBackground: uncheckedBackground || theme.colors.background,
    uncheckedBorder: uncheckedBorder || theme.colors.uncheckedBorder,
    checkedTextColor: checkedTextColor || theme.colors.checkedText,
    uncheckedTextColor: uncheckedTextColor || theme.colors.uncheckedText,
    width,
    height
  }

  return (
    <Wrapper>
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
