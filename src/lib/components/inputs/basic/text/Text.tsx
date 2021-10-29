import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputProps } from '../shared/input.definitions'
import { InputGroup, StyledInput, VerificationIcon } from '../shared/shared.styles'

export const Text = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation()

  const handleChange = (e) => {
    setValidationResponse(e.target.value, props)
    props.onChange?.call(null, e)
  }

  useEffect(() => {
    console.log(validationResponse)
  }, [validationResponse])

  return (
    <InputGroup>
      <StyledInput defaultValue={props.value} onChange={handleChange} {...props} />
      <VerificationIcon className={validationResponse?.type}>
        {validationResponse?.icon && <FontAwesomeIcon icon={validationResponse?.icon} />}
      </VerificationIcon>
    </InputGroup>
  )
}
