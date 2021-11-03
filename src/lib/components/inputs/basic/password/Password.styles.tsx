import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { StyledInput, VerificationIcon } from '../shared/Shared.styles'

export const PasswordInput = styled(StyledInput)`
  border-radius: 4px;
  padding-right: 80px;

  &.error {
    border: 1px solid ${theme.colors.error};
  }
  &.warning {
    border: 1px solid ${theme.colors.warning};
  }
  &.success {
    border: 1px solid ${theme.colors.success};
  }

  &.error:focus {
    outline-color: ${theme.colors.error};
    border: 1px solid ${theme.colors.error};
  }

  &.warning:focus {
    outline-color: ${theme.colors.warning};
    border: 1px solid ${theme.colors.warning};
  }

  &.success:focus {
    outline-color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`

export const ToggleArea = styled.span`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  background-color: #434647; /* Change to prop and use default color */
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 4px 4px 0;
  position: absolute;
  right: 0;
  bottom: 0;

  & > svg {
    color: #ffffff; /* Change to prop and use default color */
  }

  &.error {
    border-top: 1px solid ${theme.colors.error};
    border-right: 1px solid ${theme.colors.error};
    border-bottom: 1px solid ${theme.colors.error};
  }

  &.warning {
    border-top: 1px solid ${theme.colors.warning};
    border-right: 1px solid ${theme.colors.warning};
    border-bottom: 1px solid ${theme.colors.warning};
  }
  &.success {
    border-top: 1px solid ${theme.colors.success};
    border-right: 1px solid ${theme.colors.success};
    border-bottom: 1px solid ${theme.colors.success};
  }
`
export const VerificationWithToggle = styled(VerificationIcon)`
  right: 41px;

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
