import _ from 'lodash'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  forwardRef,
  ReactNode,
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

export const Checkbox = forwardRef(
  ({ id = _.uniqueId(), checked = false, ...props }: CheckboxProps, ref) => {
    const theme = useTheme()
    const styles: SpanProps = {
      typography: props.typography || theme.typography.body2,
      checkedBackground: props.checkedBackground || theme.colors.checkedBackground,
      uncheckedBackground: props.uncheckedBackground || theme.colors.background,
      uncheckedBorder: props.uncheckedBorder || theme.colors.uncheckedBorder,
      checkedBorder: props.checkedBorder || theme.colors.checkedBackground,
      checkedTextColor: props.checkedTextColor || theme.colors.onPrimary,
      uncheckedTextColor: props.uncheckedTextColor || theme.colors.primaryText,
      width: props.width,
      height: props.height,
      spacing: theme.spacing.xxsmall,
      ...props
    }
    const [isChecked, setIsChecked] = useState<boolean>(checked)

    useImperativeHandle(ref, () => {
      return {
        isChecked,
        setIsChecked
      }
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target && e.target.checked)
      props.onChange && props.onChange(e)
    }

    const uncheckedContent = props.uncheckedContent || (
      <Icon icon="plus" color={styles.uncheckedTextColor} />
    )
    const checkedContent = props.checkedContent || (
      <Icon icon="check" color={styles.checkedTextColor || theme.colors.onPrimary} />
    )

    return (
      <Wrapper {...styles}>
        <CheckInput
          id={id}
          className={props.className}
          checked={isChecked}
          onChange={handleChange}
          {...styles}
        />
        <SpanEl {...styles}>{isChecked ? checkedContent : uncheckedContent}</SpanEl>
      </Wrapper>
    )
  }
)
