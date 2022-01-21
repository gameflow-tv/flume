import React, { useState } from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputProps, InputType } from '../shared/Input.definitions'
import { ValidationInfo } from '../shared/ValidationInfo'

import {
  ActionArea,
  InputGroup,
  StyledInput,
  VerificationWithToggle
} from '../shared/Shared.styles'
import { Icon } from '../../../icons'

export const Password = (props: InputProps) => {
  const { type, ...rest } = props
  const [initialType, setInitialType] = useState<InputType>(type)
  const [validationResponse, setValidationResponse] = useInputValidation(props)

  const toggleType = () => {
    if (initialType === 'password') setInitialType('text')
    else setInitialType('password')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationResponse(e.target.value)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <>
      <InputGroup>
        <StyledInput
          className={`${validationResponse && 'validation'} ${validationResponse?.type}`}
          type={initialType}
          onChange={handleChange}
          disabled={props.disabled}
          readOnly={props.readOnly}
          placeholder={props.placeholder}
          {...rest.inputStyles}
        />
        <VerificationWithToggle className={validationResponse?.type} {...props.inputStyles}>
          {validationResponse?.icon && <Icon icon={validationResponse?.icon} />}
        </VerificationWithToggle>
        <ActionArea
          className={validationResponse?.type}
          onClick={() => toggleType()}
          {...props.inputStyles}
        >
          {<Icon icon={initialType === 'password' ? 'eye' : 'hide'} />}
        </ActionArea>
      </InputGroup>

      {ValidationInfo(props, validationResponse)}
    </>
  )
}
