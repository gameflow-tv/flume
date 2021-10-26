import React from 'react'
import { isEmpty } from '../../../helpers/general'
import { Checkbox } from '../Checkbox'
import { Password } from './password/Password'
import { InputGroup, StyledInput } from './shared/shared.styles'

export type InputType =
  | 'checkbox'
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'search'
  | 'text'

export type InputProps = {
  type: InputType
  disabled?: boolean
  cursor?: string
  onChange?: () => void
}

const validateRequired = (props: InputProps) => {
  if (isEmpty(props.type)) {
    throw new Error('type is required')
  }

  // To do: Check if props.type is the same of InputType value
}

export const Input = (props: InputProps) => {
  validateRequired(props)
  const type = props.type.toLowerCase()

  const RenderInput = () => {
    switch (type) {
      case 'password':
        return <Password {...props} />
      case 'checkbox':
        return <Checkbox />
      default:
        return <StyledInput type="text" />
    }
  }
  return <InputGroup>{RenderInput()}</InputGroup>
}
