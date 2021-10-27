import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode } from 'react'
import { isEmpty } from '../../../helpers/general'
import { Checkbox } from '../Checkbox'
import { Password } from './password/Password'
import {
  FormGroup,
  InputGroup,
  StyledInput,
  StyledLabel,
  VerificationIcon
} from './shared/shared.styles'

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
  label?: ReactNode
  placeholder?: string
  cursor?: string
  onChange?: (e?: any) => void
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
        return (
          <InputGroup>
            <VerificationIcon>
              <FontAwesomeIcon icon={faCheckCircle} />
            </VerificationIcon>
            <StyledInput {...props} type="text" />
          </InputGroup>
        )
    }
  }
  return (
    <FormGroup>
      {!isEmpty(props.label) && <StyledLabel>{props.label}</StyledLabel>}
      {RenderInput()}
    </FormGroup>
  )
}
