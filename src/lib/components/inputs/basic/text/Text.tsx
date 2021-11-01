import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputProps } from '../shared/input.definitions'
import { InfoMessage, InputGroup, StyledInput, VerificationIcon } from '../shared/shared.styles'

export const Text = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation()

  const handleChange = (e) => {
    setValidationResponse(e.target.value, props)
    props.onChange?.call(null, e)
  }

  useEffect(() => {
    console.log(validationResponse)
  }, [validationResponse])

  console.log(validationResponse?.type)
  return (
    <>
      <InputGroup>
        <StyledInput
          className={validationResponse?.type}
          defaultValue={props.value}
          onChange={handleChange}
          {...props}
        />
        <VerificationIcon className={validationResponse?.type}>
          {validationResponse?.icon && <FontAwesomeIcon icon={validationResponse?.icon} />}
        </VerificationIcon>
      </InputGroup>
      <InfoMessage className={validationResponse?.type}>{validationResponse?.message}</InfoMessage>
    </>
  )
}
