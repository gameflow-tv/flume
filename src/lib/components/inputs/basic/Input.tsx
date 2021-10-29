import {
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle,
  IconDefinition
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { isEmpty } from '../../../helpers/general'
import { InputProps, InputValidationType } from './shared/input.definitions'
import { Checkbox } from '../Checkbox'
import { Password } from './password/Password'
import {
  FormGroup,
  InputGroup,
  StyledInput,
  StyledLabel,
  VerificationIcon,
  InfoMessage
} from './shared/shared.styles'
import { useInputValidation } from '../../../hooks/useInputValidation'

const verifyRequiredProps = (props: InputProps) => {
  if (isEmpty(props.type)) {
    throw new Error('type is required')
  }

  // To do: Check if props.type is the same of InputType value
}

const getValidationIcon = (errorType: InputValidationType) => {
  switch (errorType) {
    case InputValidationType.ERROR:
      return faTimesCircle
    case InputValidationType.WARNING:
      return faExclamationTriangle
    case InputValidationType.SUCCESS:
      return faCheckCircle
    default:
      return undefined
  }
}

export const Input = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation()

  verifyRequiredProps(props)
  const type = props.type.toLowerCase()

  const handleChange = (e) => {
    setValidationResponse(e.target.value, props)
    props.onChange?.call(null, e)
  }

  const RenderInput = () => {
    switch (type) {
      case 'password':
        return <Password {...props} />
      case 'checkbox':
        return <Checkbox />
      default:
        return (
          <InputGroup>
            <StyledInput
              type="text"
              defaultValue={props.value}
              onChange={handleChange}
              {...props}
            />
            <VerificationIcon className={validationResponse?.type}>
              {validationResponse?.icon && <FontAwesomeIcon icon={validationResponse?.icon} />}
            </VerificationIcon>
          </InputGroup>
        )
    }
  }
  return (
    <FormGroup>
      {!isEmpty(props.label) && <StyledLabel>{props.label}</StyledLabel>}
      {RenderInput()}
      <InfoMessage className={validationResponse?.type}>{validationResponse?.message}</InfoMessage>
    </FormGroup>
  )
}
