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
import {
  ActionArea,
  InfoMessage,
  InputGroup,
  ListItem,
  StyledInput,
  VerificationWithToggle
} from '../shared/Shared.styles'

export const Password = (props: InputProps) => {
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
          {validationResponse?.icon && <FontAwesomeIcon icon={validationResponse?.icon} />}
        </VerificationWithToggle>
        <ActionArea
          className={validationResponse?.type}
          onClick={() => toggleType()}
          {...props.inputStyles}>
          {<FontAwesomeIcon icon={initialType === 'password' ? faEye : faEyeSlash} />}
        </ActionArea>
      </InputGroup>
      {!props.multipleCriteriaInfo && (
        <InfoMessage className={validationResponse?.type} {...props.inputStyles}>
          {validationResponse?.message}
        </InfoMessage>
      )}
      {props.multipleCriteriaInfo && validationResponse ? (
        <ul>
          {(validationResponse as Array<InputCriteriaResponse>).map((crit, idx) => (
            <ListItem key={`validation_${idx}`} className={`${crit.type}`} {...props.inputStyles}>
              {crit.message}
            </ListItem>
          ))}
        </ul>
      ) : props.multipleCriteriaInfo && props.criteria ? (
        <ul>
          {(props.criteria as InputValidation[])?.map((crit, idx) => (
            <ListItem key={`validation_${idx}`} className="none" {...props.inputStyles}>
              {crit.invalidMessage}
            </ListItem>
          ))}
        </ul>
      ) : null}
    </>
  )
}
