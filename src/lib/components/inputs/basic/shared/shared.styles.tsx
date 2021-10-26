import styled from 'styled-components'
import { InputProps } from '../Input'
import { PasswordProps } from '../password/Password'

export const StyledInput = styled.input.attrs((props) => ({
  type: props.type
}))<InputProps | PasswordProps>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : props.cursor)};
`
export const InputGroup = styled.div``
