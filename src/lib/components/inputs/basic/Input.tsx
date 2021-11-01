import React from 'react'
import { isEmpty } from '../../../helpers/general'
import { InputProps } from './shared/input.definitions'
import { Checkbox } from '../Checkbox'
import { Password } from './password/Password'
import { Text } from './text/Text'
import { FormGroup, StyledLabel } from './shared/shared.styles'

const verifyRequiredProps = (props: InputProps) => {
  if (isEmpty(props.type)) {
    throw new Error('type is required')
  }

  // To do: Check if props.type is the same of InputType value
}

export const Input = (props: InputProps) => {
  verifyRequiredProps(props)
  const type = props.type.toLowerCase()

  const RenderInput = () => {
    switch (type) {
      case 'password':
        return <Password {...props} />
      case 'checkbox':
        return <Checkbox />
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
