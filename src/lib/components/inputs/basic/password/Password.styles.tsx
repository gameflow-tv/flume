import styled from 'styled-components'
import { InputGroup, StyledInput } from '../shared/shared.styles'

export const PasswordInput = styled(StyledInput)`
  border-radius: 4px;
  padding-right: 80px;
`
export const PasswordGroup = styled(InputGroup)`
  display: flex;
  flex-direction: column;
  position: relative;
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

export const VerificationIcon = styled.span`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: none;
  border-radius: 0 4px 4px 0;
  position: absolute;
  right: 41px;
  bottom: 0;

  & > svg {
    color: #34d058; /* Change to prop and use default color */
  }
`
