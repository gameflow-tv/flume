import React, { useEffect } from 'react'
import { Icon } from '../../../icons'
import { useInputValidation } from '../../../../hooks/useInputValidation'
import { getResultantValidationResponse, InputProps } from '../shared'
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

  useEffect(() => {
    const { isValid, nonBlocking } = getResultantValidationResponse(validationResponse)
    props.onValidate?.call(null, isValid, nonBlocking)
  }, [validationResponse])

  useEffect(() => {
    setValidationResponse(props.value, props.criteria)
  }, [props])

  return (
    <React.Fragment>
      <InputGroup {...props.inputStyles}>
        <GlobalInput
          id={props.id}
          ref={props.forwardedRef}
          className={`${validationResponse && 'validation'} ${validationResponse?.type}`}
          defaultValue={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly}
          autoComplete={props.autoComplete}
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
