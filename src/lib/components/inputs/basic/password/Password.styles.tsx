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
export const ShowPassword = styled.span`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  background-color: #434647;
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
    color: #ffffff;
  }
`

export const VerificationIcon = styled.span`
  position: absolute;
  right: 41px;
  padding: 12px;

  & > svg {
    color: #34d058;
  }
`
