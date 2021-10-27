import { faEye, faEyeSlash } from '@fortawesome/pro-light-svg-icons'
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { InputProps } from '../Input'
import { InputGroup } from '../shared/shared.styles'
import { ToggleArea, PasswordInput, VerificationIcon } from './Password.styles'

export type PasswordProps = InputProps & {
  // specified password component props
  readOnly?: boolean
}

export const Password = (props: PasswordProps) => {
  const [initialType, setInitialType] = useState<string>(props.type)

  const toggleType = () => {
    if (initialType === 'password') setInitialType('text')
    else setInitialType('password')
  }

  const handleChange = (e) => {
    // validating password by criteria
    console.log(e)
    props.onChange?.call(null, e)
  }

  return (
    <InputGroup>
      <PasswordInput {...props} />
      <VerificationIcon>
        <FontAwesomeIcon icon={faCheckCircle} />
      </VerificationIcon>
      <ToggleArea onClick={() => toggleType()}>
        {<FontAwesomeIcon icon={initialType === 'password' ? faEye : faEyeSlash} />}
      </ToggleArea>
    </InputGroup>
  )
}
