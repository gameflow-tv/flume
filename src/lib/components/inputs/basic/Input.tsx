import React from 'react'
import { isEmpty } from '../../../helpers/general'
import { InputProps } from './shared/input.definitions'
import { Checkbox } from '../Checkbox'
import { Password } from './password/Password'
import { Text } from './text/Text'
import { FormGroup, StyledLabel, InfoMessage } from './shared/shared.styles'
import { useInputValidation } from '../../../hooks/useInputValidation'

const verifyRequiredProps = (props: InputProps) => {
  if (isEmpty(props.type)) {
    throw new Error('type is required')
  }

  // To do: Check if props.type is the same of InputType value
}

export const Input = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation()

  verifyRequiredProps(props)
  const type = props.type.toLowerCase()

  const RenderInput = () => {
    switch (type) {
      case 'password':
        return <Password {...props} />
      case 'checkbox':
        return <Checkbox />
      case 'email':
      case 'text':
      default:
        return <Text {...props} />
    }
  }
  return (
    <FormGroup>
      {!isEmpty(props.label) && <StyledLabel>{props.label}</StyledLabel>}
      {RenderInput()}
    </FormGroup>
  )
}
