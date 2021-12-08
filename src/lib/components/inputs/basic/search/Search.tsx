import React from 'react'
import { Icon } from '../../../icons'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputProps } from '../shared/Input.definitions'
import { ActionArea, InputGroup, VerificationWithToggle } from '../shared/Shared.styles'
import { ValidationInfo } from '../shared/ValidationInfo'
import { SearchInput } from './Search.styles'

export const Search = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation(props)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationResponse(e.target.value)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <>
      <InputGroup>
        <SearchInput
          className={`${validationResponse && 'validation'} ${validationResponse?.type}`}
          onChange={handleChange}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          disabled={props.disabled}
          {...props.inputStyles}
        />
        <VerificationWithToggle className={validationResponse?.type} {...props.inputStyles}>
          {validationResponse?.icon && <Icon icon={validationResponse?.icon} />}
        </VerificationWithToggle>
        <ActionArea className={validationResponse?.type} {...props.inputStyles}>
          {<Icon icon="search" />}
        </ActionArea>
      </InputGroup>
      {ValidationInfo(props, validationResponse)}
    </>
  )
}
