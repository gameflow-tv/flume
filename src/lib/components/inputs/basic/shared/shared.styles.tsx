import styled from 'styled-components'
import { InputProps } from '../Input'

export const StyledInput = styled.input.attrs((props) => ({
  type: props.type
}))<InputProps>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : props.cursor)};
`
export const InputGroup = styled.div<InputProps>``
