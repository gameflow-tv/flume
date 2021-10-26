import { faEye, faEyeSlash } from '@fortawesome/pro-light-svg-icons'
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { InputProps } from '../Input'
// import { StyledInput } from '../shared/shared.styles'
import { ShowPassword, PasswordGroup, PasswordInput, VerificationIcon } from './Password.styles'

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
    <PasswordGroup>
      <label>Label</label>
      <PasswordInput {...props} />
      <ShowPassword onClick={() => toggleType()}>
        <VerificationIcon>
          <FontAwesomeIcon icon={faCheckCircle} />
        </VerificationIcon>
        {initialType === 'password' ? (
          <FontAwesomeIcon icon={faEye} />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} />
        )}
      </ShowPassword>
    </PasswordGroup>
  )
}
