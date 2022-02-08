import React from 'react'
import { Icon } from '../../../icons'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { InputProps } from '../shared'
import { InputGroup, GlobalInput, VerificationIcon } from '../shared'
import { ValidationInfo } from '../shared/ValidationInfo'

export const Text = (props: InputProps) => {
  const [validationResponse, setValidationResponse] = useInputValidation(props)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationResponse(e.target.value)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <React.Fragment>
      <InputGroup {...props.inputStyles}>
        <GlobalInput
          className={`${validationResponse && 'validation'} ${validationResponse?.type}`}
          defaultValue={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly}
          onChange={handleChange}
          {...props.inputStyles}
        />
        <VerificationIcon className={validationResponse?.type} {...props.inputStyles}>
          {validationResponse?.icon && <Icon icon={validationResponse?.icon} />}
        </VerificationIcon>
      </InputGroup>
      {<ValidationInfo props={props} validationResponse={validationResponse} />}
    </React.Fragment>
  )
}
