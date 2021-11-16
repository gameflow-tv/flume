import React from 'react'
import { isEmpty } from '../../../helpers/general'
import { InputProps } from './shared/Input.definitions'
import { Checkbox } from '../Checkbox'
import { Password } from './password/Password'
import { Text } from './text/Text'
import { FormGroup, StyledLabel } from './shared/Shared.styles'
import { Select } from './select/Select'
import { Search } from './search/Search'
import { useTheme } from '../../../hooks'
import { typographyToCss } from '../../../theme'

const verifyRequiredProps = (props: InputProps) => {
  if (isEmpty(props.type)) {
    throw new Error('type is required')
  }

  // To do: Check if props.type is the same of InputType value
}

export const Input = (props: InputProps) => {
  verifyRequiredProps(props)
  const type = props.type.toLowerCase()
  const theme = useTheme()

  const styles = {
    width: props.inputStyles?.width || '100%',
    height: props.inputStyles?.height || '41px',
    label: {
      textColor: props.inputStyles?.label?.textColor || theme.colors.secondaryText,
      margin: props.inputStyles?.label?.margin || theme.spacing.xsmall
    },
    input: {
      backgroundColor: props.inputStyles?.input?.backgroundColor || theme.colors.onBackground,
      borderRadius: props.inputStyles?.input?.borderRadius || theme.spacing.xxsmall,
      padding: props.inputStyles?.input?.padding || theme.spacing.small,
      textColor: props.inputStyles?.input?.textColor || theme.colors.inputBackground,
      borderColor: props.inputStyles?.input?.borderColor || theme.colors.shimmerHighlight,
      primaryBorder: props.inputStyles?.input?.primaryBorder || theme.colors.primary,
      onFocus: {
        errorColor: props.inputStyles?.input?.onFocus?.errorColor || theme.colors.error,
        warningColor: props.inputStyles?.input?.onFocus?.warningColor || theme.colors.warning,
        successColor: props.inputStyles?.input?.onFocus?.successColor || theme.colors.success
      }
    },
    disabledInput: {
      backgroundColor: theme.colors.textField,
      borderColor: theme.colors.shimmerHighlight
    },
    icon: {
      iconPadding: theme.spacing.small,
      backgroundColor: theme.colors.sliderBackground,
      borderRadius: theme.spacing.xxsmall,
      iconColor: theme.colors.primaryText
    },
    infoMessage: {
      paddingTop: theme.spacing.xxsmall,
      typography: typographyToCss(theme.typography.body3),
      primaryTextColor: theme.colors.primaryText
    }
  }

  const inputProps = { ...props, inputStyles: styles }

  const RenderInput = () => {
    switch (type) {
      case 'password':
        return <Password {...inputProps} />
      case 'checkbox':
        return <Checkbox />
      case 'select':
        return <Select {...inputProps} />
      case 'search':
        return <Search {...inputProps} />
      case 'email':
      case 'text':
      default:
        return <Text {...inputProps} />
    }
  }

  return (
    <FormGroup>
      {!isEmpty(props.label) && <StyledLabel {...styles}>{props.label}</StyledLabel>}
      {RenderInput()}
    </FormGroup>
  )
}
