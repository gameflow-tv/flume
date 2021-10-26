import React, { useState } from 'react'
import { InputProps } from '../Input'
import { InputGroup, StyledInput } from '../shared/shared.styles'

export type PasswordProps = InputProps & {
  // specifid password component props
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
      <StyledInput {...props} />
      <button onClick={() => toggleType()}>o</button>
    </InputGroup>
  )
}
