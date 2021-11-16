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
  console.log(theme)

  const styles = {
    width: props.width || '100%',
    height: props.height || '41px',
    label: {
      textColor: theme.colors.secondaryText,
      margin: theme.spacing.xsmall
    },
    input: {
      backgroundColor: theme.colors.onBackground,
      borderRadius: theme.spacing.xxsmall,
      padding: theme.spacing.small,
      textColor: theme.colors.inputBackground,
      borderColor: theme.colors.shimmerHighlight,
      primaryBorder: theme.colors.primary
    },
    inputOnFocus: {
      errorColor: theme.colors.error,
      warningColor: theme.colors.warning,
      successColor: theme.colors.success
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

  const RenderInput = () => {
    switch (type) {
      case 'password':
        return <Password {...props} {...styles} />
      case 'checkbox':
        return <Checkbox />
      case 'select':
        return <Select {...props} {...styles} />
      case 'search':
        return <Search {...props} {...styles} />
      case 'email':
      case 'text':
      default:
        return <Text {...props} {...styles} />
    }
  }

  return (
    <FormGroup>
      {!isEmpty(props.label) && <StyledLabel {...styles}>{props.label}</StyledLabel>}
      {RenderInput()}
    </FormGroup>
  )
}
