import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputCriteriaResponse, InputProps, InputValidation } from '../shared/input.definitions'
import {
  InfoMessage,
  InputGroup,
  ListItem,
  StyledInput,
  VerificationIcon
} from '../shared/shared.styles'

export const Text = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation(props)

  useEffect(() => {
    console.log(validationResponse)
  }, [validationResponse])
  const handleChange = (e) => {
    setValidationResponse(e.target.value)
    props.onChange?.call(null, e)
  }

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
      {!props.multipleCriteriaInfo && (
        <InfoMessage className={validationResponse?.type}>
          {validationResponse?.message}
        </InfoMessage>
      )}
      {validationResponse ? (
        <ul>
          {(validationResponse as InputCriteriaResponse[]).map((crit, idx) => (
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
