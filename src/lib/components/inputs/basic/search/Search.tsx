import { faSearch } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputCriteriaResponse, InputProps, InputValidation } from '../shared/Input.definitions'
import {
  ActionArea,
  InfoMessage,
  InputGroup,
  ListItem,
  VerificationWithToggle
} from '../shared/Shared.styles'
import { SearchInput } from './Search.styles'

export const Search = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation(props)

  const handleChange = (e) => {
    setValidationResponse(e.target.value)
    props.onChange?.call(null, e)
  }

  return (
    <>
      <InputGroup>
        <SearchInput
          className={`${validationResponse && 'validation'} ${validationResponse?.type}`}
          onChange={handleChange}
          {...props}
        />
        <VerificationWithToggle className={validationResponse?.type} {...props}>
          {validationResponse?.icon && <FontAwesomeIcon icon={validationResponse?.icon} />}
        </VerificationWithToggle>
        <ActionArea className={validationResponse?.type} {...props}>
          {<FontAwesomeIcon icon={faSearch} />}
        </ActionArea>
      </InputGroup>
      {!props.multipleCriteriaInfo && (
        <InfoMessage className={validationResponse?.type} {...props}>
          {validationResponse?.message}
        </InfoMessage>
      )}
      {props.multipleCriteriaInfo && validationResponse ? (
        <ul>
          {(validationResponse as Array<InputCriteriaResponse>).map((crit, idx) => (
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
