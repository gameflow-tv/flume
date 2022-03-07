import { InputProps } from './shared'
import { Checkbox } from '../Checkbox'
import { Password } from './password/Password'
import { Text } from './text/Text'
import { FormGroup, StyledLabel } from './shared'
import { Search } from './search/Search'
import { useAmbiance, useTheme } from '../../../hooks'
import { transitionToCss, typographyToCss } from '../../../theme'

const verifyRequiredProps = (props: InputProps) => {
  if (!props.type) {
    throw new Error('type is required')
  }
}

const InputVariant: React.FC<InputProps> = (props) => {
  switch (props.type) {
    case 'password':
      return <Password {...props} />
    case 'checkbox':
      return <Checkbox />
    case 'search':
      return <Search {...props} />
    case 'email':
    case 'text':
    default:
      return <Text {...props} />
  }
}

export const Input = (props: InputProps) => {
  verifyRequiredProps(props)
  const theme = useTheme()
  const ambiance = useAmbiance()

  const styles = {
    width: props.inputStyles?.width || '100%',
    height: props.inputStyles?.height || '41px',
    label: {
      textColor: props.inputStyles?.label?.textColor || theme.colors.body,
      margin: props.inputStyles?.label?.margin || theme.spacing.xsmall,
      typography: props.inputStyles?.label?.typography || typographyToCss(theme.typography.header5)
    },
    input: {
      backgroundColor: props.inputStyles?.input?.backgroundColor || ambiance.color,
      borderRadius: props.inputStyles?.input?.borderRadius || theme.spacing.xxsmall,
      padding: props.inputStyles?.input?.padding || theme.spacing.small,
      textColor: props.inputStyles?.input?.textColor || theme.colors.body,
      borderColor: props.inputStyles?.input?.borderColor || ambiance.child.color,
      primaryBorder: props.inputStyles?.input?.primaryBorder || theme.colors.primary,
      typography: props.inputStyles?.input?.typography || typographyToCss(theme.typography.body1),
      placeholder: props.inputStyles?.input?.placeholder || theme.colors.inactive,
      transition: props.inputStyles?.input?.transition || transitionToCss(theme.transitions.long),

      onFocus: {
        errorColor: props.inputStyles?.input?.onFocus?.errorColor || theme.colors.error,
        warningColor: props.inputStyles?.input?.onFocus?.warningColor || theme.colors.warning,
        successColor: props.inputStyles?.input?.onFocus?.successColor || theme.colors.success
      },
      disabled: {
        backgroundColor: props.inputStyles?.input?.disabled?.backgroundColor || ambiance.color,
        borderColor: props.inputStyles?.input?.disabled?.borderColor || ambiance.child.color
      },
      onHover: {
        borderColor: props.inputStyles?.input?.onHover?.borderColor || theme.colors.primary
      }
    },
    icon: {
      iconPadding: props.inputStyles?.icon?.iconPadding || theme.spacing.small,
      backgroundColor: props.inputStyles?.icon?.backgroundColor || ambiance.color,
      borderRadius: props.inputStyles?.icon?.borderRadius || theme.spacing.xxsmall,
      iconColor: props.inputStyles?.icon?.iconColor || theme.colors.header
    },
    infoMessage: {
      paddingTop: props.inputStyles?.infoMessage?.paddingTop || theme.spacing.xxsmall,
      typography:
        props.inputStyles?.infoMessage?.typography || typographyToCss(theme.typography.body3),
      headerColor: props.inputStyles?.infoMessage?.headerColor || theme.colors.header
    }
  }

  const inputProps: InputProps = { ...props, inputStyles: styles }

  return (
    <FormGroup>
      {props.label && (
        <StyledLabel htmlFor={props.id} {...styles}>
          {props.label}
        </StyledLabel>
      )}
      <InputVariant {...inputProps} />
    </FormGroup>
  )
}
