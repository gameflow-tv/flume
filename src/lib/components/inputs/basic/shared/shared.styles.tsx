import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { InputProps } from '../Input'
import { PasswordProps } from '../password/Password'

export const StyledLabel = styled.label`
  ${theme.typography.header5};
  text-transform: capitalize;
  color: #eeeeee;
  margin: 0 0 8px 0;
`

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
  display: flex;
  flex-direction: column;
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

  &.error {
    & > svg {
      color: ${theme.colors.error};
    }
  }
  &.warning {
    & > svg {
      color: ${theme.colors.warning};
    }
  }
  &.success {
    & > svg {
      color: ${theme.colors.success};
    }
  }
`

export const InfoMessage = styled.div`
  margin-top: 4px;
  ${theme.typography.body3};
  height: 12px;
  width: 131px;

  &.error {
    color: ${theme.colors.error};
  }
  &.warning {
    color: ${theme.colors.warning};
  }
  &.success {
    color: ${theme.colors.success};
  }
`
