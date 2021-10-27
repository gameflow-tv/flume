import styled from 'styled-components'
import { StyledInput, VerificationIcon } from '../shared/shared.styles'

export const PasswordInput = styled(StyledInput)`
  border-radius: 4px;
  padding-right: 80px;
`

export const ToggleArea = styled.span`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  background-color: #434647; /* Change to prop and use default color */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: none;
  border-radius: 0 4px 4px 0;
  position: absolute;
  right: 0;
  bottom: 0;

  & > svg {
    color: #ffffff; /* Change to prop and use default color */
  }
`
export const VerificationWithToggle = styled(VerificationIcon)`
  right: 41px;
`
