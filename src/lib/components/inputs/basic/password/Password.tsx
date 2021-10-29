import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputProps, InputType, InputValidationData } from '../shared/input.definitions'
import { InfoMessage, InputGroup } from '../shared/shared.styles'
import { ToggleArea, PasswordInput, VerificationWithToggle } from './Password.styles'

export type PasswordProps = InputProps & {
  // specified password component props
  readOnly?: boolean
}

export const Password = (props: PasswordProps) => {
  const { type, ...rest } = props
  const [initialType, setInitialType] = useState<InputType>(type)
  const [validationResponse, setValidationResponse] = useInputValidation()

  const toggleType = () => {
    if (initialType === 'password') setInitialType('text')
    else setInitialType('password')
  }

  const handleChange = (e) => {
    setValidationResponse(e.target.value, props)
    rest.onChange?.call(null, e)
  }

  return (
    <>
      <InputGroup>
        <PasswordInput
          className={validationResponse?.type}
          type={initialType}
          onChange={handleChange}
          {...rest}
        />
        <VerificationWithToggle className={validationResponse?.type}>
          {validationResponse?.icon && <FontAwesomeIcon icon={validationResponse?.icon} />}
        </VerificationWithToggle>
        <ToggleArea className={validationResponse?.type} onClick={() => toggleType()}>
          {<FontAwesomeIcon icon={initialType === 'password' ? faEye : faEyeSlash} />}
        </ToggleArea>
      </InputGroup>
      <InfoMessage className={validationResponse?.type}>{validationResponse?.message}</InfoMessage>
    </>
  )
}
