import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputProps } from '../shared/input.definitions'
import { InfoMessage, InputGroup, StyledInput, VerificationIcon } from '../shared/shared.styles'

export const Text = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation()

  const handleChange = (e) => {
    setValidationResponse(e.target.value, props)
    props.onChange?.call(null, e)
  }

  return (
    <>
      <InputGroup>
        <StyledInput defaultValue={props.value} onChange={handleChange} {...props} />
        <VerificationIcon className={validationResponse?.type}>
          {validationResponse?.icon && <FontAwesomeIcon icon={validationResponse?.icon} />}
        </VerificationIcon>
      </InputGroup>
      <InfoMessage className={validationResponse?.type}>{validationResponse?.message}</InfoMessage>
    </>
  )
}
