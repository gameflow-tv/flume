import styled from 'styled-components'
import { typographyToCss } from '../../../../theme'
import theme from '../../../../theme/theme'
import { InputProps } from './Input.definitions'

export const StyledLabel = styled.label`
  ${theme.typography.header5};
  text-transform: capitalize;
  color: #eeeeee;
  margin: 0 0 8px 0;
`

export const GlobalInput = styled.input.attrs((props) => ({
  type: props.type
}))<InputProps>`
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

  &.validation {
    padding-right: 41px;
  }

  &.error,
  &.error:focus {
    border: 1px solid ${theme.colors.error};
  }
  &.warning,
  &.warning:focus {
    border: 1px solid ${theme.colors.warning};
  }
  &.success,
  &.success:focus {
    border: 1px solid ${theme.colors.success};
  }

  &:focus {
    border: 1px solid ${theme.colors.primary};
    outline: none;
  }

  &:disabled {
    background-color: ${theme.colors.textField};
    opacity: 0.5;
    border: 1px solid ${theme.colors.shimmerHighlight};
  }
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

export const ListItem = styled.li`
  ${typographyToCss(theme.typography.body3)};
  color: ${theme.colors.primaryText};
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

export const ActionArea = styled.span`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  background-color: #434647;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 4px 4px 0;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;

  & > svg {
    color: #ffffff;
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

export const StyledInput = styled(GlobalInput)`
  border-radius: 4px;
  padding-right: 46px;

  &.validation {
    padding-right: 80px;
  }

  &:focus {
    outline: none;

    & + span + span {
      border-top: 1px solid ${theme.colors.primary};
      border-right: 1px solid ${theme.colors.primary};
      border-bottom: 1px solid ${theme.colors.primary};
    }
  }

  &.error:focus {
    & + span + span {
      border-top: 1px solid ${theme.colors.error};
      border-right: 1px solid ${theme.colors.error};
      border-bottom: 1px solid ${theme.colors.error};
    }
  }

  &.warning:focus {
    & + span + span {
      border-top: 1px solid ${theme.colors.warning};
      border-right: 1px solid ${theme.colors.warning};
      border-bottom: 1px solid ${theme.colors.warning};
    }
  }

  &.success:focus {
    & + span + span {
      border-top: 1px solid ${theme.colors.success};
      border-right: 1px solid ${theme.colors.success};
      border-bottom: 1px solid ${theme.colors.success};
    }
  }
`
