import React, { useEffect, useState } from 'react'
import { Icon } from '../../../icons'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { getResultantValidationResponse, InputProps } from '../shared'
import { ActionArea, InputGroup, VerificationWithToggle } from '../shared'
import { ValidationInfo } from '../shared/ValidationInfo'
import { SearchInput } from './Search.styles'

export const Search = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation(props)
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationResponse(e.target.value)
    setValue(e.target.value)
    props.onChange && props.onChange(e)
  }

  const cleanUp = () => {
    value && handleChange.call(null, { target: { value: '' } })
  }

  useEffect(() => {
    props.onValidate?.call(null, getResultantValidationResponse(validationResponse))
  }, [validationResponse])

  return (
    <React.Fragment>
      <InputGroup>
        <SearchInput
          className={`${validationResponse && 'validation'} ${validationResponse?.type}`}
          onChange={handleChange}
          value={value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          disabled={props.disabled}
          autoComplete={props.autoComplete}
          {...props.inputStyles}
        />
        <VerificationWithToggle className={validationResponse?.type} {...props.inputStyles}>
          {validationResponse?.icon && <Icon icon={validationResponse?.icon} />}
        </VerificationWithToggle>
        <ActionArea className={validationResponse?.type} {...props.inputStyles} onClick={cleanUp}>
          {<Icon icon={!value ? 'search' : 'close'} />}
        </ActionArea>
      </InputGroup>
      <ValidationInfo props={props} validationResponse={validationResponse} />
    </React.Fragment>
  )
}
