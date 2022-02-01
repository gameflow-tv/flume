import React, { useRef, useState } from 'react'
import { Icon } from '../../../icons'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputProps } from '../shared/Input.definitions'
import { ActionArea, InputGroup, VerificationWithToggle } from '../shared/Shared.styles'
import { ValidationInfo } from '../shared/ValidationInfo'
import { SearchInput } from './Search.styles'

export const Search = (props: InputProps) => {
  const inputRef = useRef(null)
  const [value, setValue] = useState('')
  const [validationResponse, setValidationResponse] = useInputValidation(props)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationResponse(e.target.value)
    setValue(e.target.value)
    props.onChange && props.onChange(e)
  }

  const cleanUp = () => {
    value && handleChange.call(null, { target: { value: '' } })
  }

  return (
    <React.Fragment>
      <InputGroup>
        <SearchInput
          ref={inputRef}
          className={`${validationResponse && 'validation'} ${validationResponse?.type}`}
          onChange={handleChange}
          value={value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          disabled={props.disabled}
          {...props.inputStyles}
        />
        <VerificationWithToggle className={validationResponse?.type} {...props.inputStyles}>
          {validationResponse?.icon && <Icon icon={validationResponse?.icon} />}
        </VerificationWithToggle>
        <ActionArea className={validationResponse?.type} {...props.inputStyles} onClick={cleanUp}>
          {<Icon icon={!value ? 'search' : 'close'} />}
        </ActionArea>
      </InputGroup>
      {ValidationInfo(props, validationResponse)}
    </React.Fragment>
  )
}
