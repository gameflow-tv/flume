import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputCriteriaResponse, InputProps, InputValidation } from '../shared/Input.definitions'
import {
  InfoMessage,
  InputGroup,
  ListItem,
  GlobalInput,
  VerificationIcon
} from '../shared/Shared.styles'

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
      <InputGroup {...props}>
        <GlobalInput
          className={`${validationResponse && 'validation'} ${validationResponse?.type}`}
          defaultValue={props.value}
          onChange={handleChange}
          {...props}
        />
        <VerificationIcon className={validationResponse?.type} {...props}>
          {validationResponse?.icon && <FontAwesomeIcon icon={validationResponse?.icon} />}
        </VerificationIcon>
      </InputGroup>
      {!props.multipleCriteriaInfo && (
        <InfoMessage className={validationResponse?.type} {...props}>
          {validationResponse?.message}
        </InfoMessage>
      )}
      {props.multipleCriteriaInfo && validationResponse ? (
        <ul>
          {(validationResponse as InputCriteriaResponse[]).map((crit, idx) => (
            <ListItem key={`validation_${idx}`} className={`${crit.type}`} {...props}>
              {crit.message}
            </ListItem>
          ))}
        </ul>
      ) : props.multipleCriteriaInfo && props.criteria ? (
        <ul>
          {(props.criteria as InputValidation[])?.map((crit, idx) => (
            <ListItem key={`validation_${idx}`} className="none" {...props}>
              {crit.invalidMessage}
            </ListItem>
          ))}
        </ul>
      ) : null}
    </>
  )
}
