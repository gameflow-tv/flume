import _ from 'lodash'
import React, {
  forwardRef,
  ReactEventHandler,
  ReactNode,
  useImperativeHandle,
  useState
} from 'react'
import { faCheck, faPlus } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TypographyStyle } from '../../../theme'
import { CheckInput, SpanEl, SpanProps, Wrapper } from './Checkbox.styles'
import { useTheme } from '../../../hooks'

export type CheckboxProps = {
  id?: string
  label?: string
  checked?: boolean
  onChange?: ReactEventHandler<HTMLInputElement>
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

export const Checkbox = forwardRef(
  (
    {
      id = _.uniqueId(),
      checked = false,
      checkedContent = <FontAwesomeIcon icon={faCheck} />,
      uncheckedContent = <FontAwesomeIcon icon={faPlus} />,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked)

    useImperativeHandle(ref, () => {
      return {
        isChecked,
        setIsChecked
      }
    })

    const handleCheckEvent = (e: any) => {
      setIsChecked(e.target.checked)
      props.onChange(e)
    }

    const theme = useTheme()
    const styles: SpanProps = {
      typography: props.typography || theme.typography.body2,
      checkedBackground: props.checkedBackground || theme.colors.checkedBackground,
      uncheckedBackground: props.uncheckedBackground || theme.colors.background,
      uncheckedBorder: props.uncheckedBorder || theme.colors.uncheckedBorder,
      checkedBorder: props.checkedBorder || theme.colors.checkedBackground,
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
          className={props.className}
          checked={isChecked}
          onChange={handleCheckEvent}
          {...styles}
        />
        <SpanEl {...styles}>{isChecked ? checkedContent : uncheckedContent}</SpanEl>
      </Wrapper>
    )
  }
)
