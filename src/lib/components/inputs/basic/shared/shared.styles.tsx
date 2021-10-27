import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { InputProps } from '../Input'
import { PasswordProps } from '../password/Password'

export const StyledLabel = styled.label``

export const StyledInput = styled.input.attrs((props) => ({
  type: props.type
}))<InputProps | PasswordProps>`
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : props.cursor)};
  width: 261px;
  height: 41px;
  background-color: #36393b; /* Change to prop and use default color */
  border-radius: 4px;
  padding: 12px;
  color: rgba(255, 255, 255, 0.5) /* Change to prop and use default color */;
  ${theme.typography.body1};
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.1); /* Change to prop and use default color */
  display: flex;
  align-items: center;
  padding-right: 41px;
`

export const FormGroup = styled.div`
  position: relative;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const VerificationIcon = styled.span`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: none;
  position: absolute;
  right: 0;

  & > svg {
    color: #34d058; /* Change to prop and use default color */
  }
`
