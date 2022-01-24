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
  onChange?: (checked: boolean) => void
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
      checkedContent = <Icon icon="check" />,
      uncheckedContent = <Icon icon="close" />,
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

    useEffect(() => {
      props.onChange && props.onChange.call(isChecked)
    }, [isChecked])

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
          checked={checked}
          onChange={(e) => setIsChecked(e.target.checked)}
          {...styles}
        />
        <SpanEl {...styles}>{checked ? checkedContent : uncheckedContent}</SpanEl>
      </Wrapper>
    )
  }
)
