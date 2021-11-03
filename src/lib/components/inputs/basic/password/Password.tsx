import { faEye, faEyeSlash } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import {
  InputCriteriaResponse,
  InputProps,
  InputType,
  InputValidation
} from '../shared/Input.definitions'
import { InfoMessage, InputGroup, ListItem } from '../shared/Shared.styles'
import { ToggleArea, PasswordInput, VerificationWithToggle } from './Password.styles'

export type PasswordProps = InputProps & {
  // specified password component props
  readOnly?: boolean
}

export const Password = (props: PasswordProps) => {
  const { type, ...rest } = props
  const [initialType, setInitialType] = useState<InputType>(type)
  const [validationResponse, setValidationResponse] = useInputValidation(props)

  const toggleType = () => {
    if (initialType === 'password') setInitialType('text')
    else setInitialType('password')
  }

  const handleChange = (e) => {
    setValidationResponse(e.target.value)
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
      {!props.multipleCriteriaInfo && (
        <InfoMessage className={validationResponse?.type}>
          {validationResponse?.message}
        </InfoMessage>
      )}
      {validationResponse ? (
        <ul>
          {(validationResponse as Array<InputCriteriaResponse>).map((crit, idx) => (
            <ListItem key={`validation_${idx}`} className={`${crit.type}`}>
              {crit.message}
            </ListItem>
          ))}
        </ul>
      ) : props.criteria ? (
        <ul>
          {(props.criteria as InputValidation[])?.map((crit, idx) => (
            <ListItem key={`validation_${idx}`} className="none">
              {crit.invalidMessage}
            </ListItem>
          ))}
        </ul>
      ) : null}
    </>
  )
}
