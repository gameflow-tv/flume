import styled from 'styled-components'
import { typographyToCss } from '../../../../theme'
import theme from '../../../../theme/theme'
import { InputProps } from './Input.definitions'

export type SharedProps = {
  disabled?: boolean
  label?: {
    textColor: string
    margin: string
  }
  input?: {
    backgroundColor: string
    borderRadius: string
    padding: string
    textColor: string
    borderColor: string
    primaryBorder: string
  }
  inputOnFocus?: {
    errorColor: string
    warningColor: string
    successColor: string
  }
  disabledInput?: {
    backgroundColor: string
    borderColor: string
  }
  icon?: {
    iconPadding: string
    backgroundColor: string
    borderRadius: string
    iconColor: string
  }
  infoMessage?: {
    paddingTop: string
    typography: string
    primaryTextColor: string
  }
}

export const StyledLabel = styled.label<SharedProps>`
  ${theme.typography.header5};
  text-transform: capitalize;
  color: ${(props) => props.label.textColor};
  margin: 0 0 ${(props) => props.label.margin} 0;
`

export const GlobalInput = styled.input.attrs((props) => ({
  type: props.type
}))<SharedProps>`
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : props.cursor)};
  width: 261px;
  height: 41px;
  background-color: ${(props) => props.input.backgroundColor};
  border-radius: ${(props) => props.input.borderRadius};
  padding: ${(props) => props.input.padding};
  color: ${(props) => props.input.textColor};
  ${theme.typography.body1};
  border: none;
  border: 1px solid ${(props) => props.input.borderColor}; /* Change to prop and use default color */
  display: flex;
  align-items: center;

  &.validation {
    padding-right: 41px;
  }

  &.error,
  &.error:focus {
    border: 1px solid ${(props) => props.inputOnFocus.errorColor};
  }
  &.warning,
  &.warning:focus {
    border: 1px solid ${(props) => props.inputOnFocus.warningColor};
  }
  &.success,
  &.success:focus {
    border: 1px solid ${(props) => props.inputOnFocus.successColor};
  }

  &:focus {
    border: 1px solid ${(props) => props.input.primaryBorder};
    outline: none;
  }

  &:disabled {
    background-color: ${(props) => props.disabledInput.backgroundColor};
    opacity: 0.5;
    border: 1px solid ${(props) => props.disabledInput.borderColor};
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

export const VerificationIcon = styled.span<SharedProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.icon.iconPadding};
  border: none;
  position: absolute;
  right: 0;

  &.error {
    & > svg {
      color: ${(props) => props.inputOnFocus.errorColor};
    }
  }
  &.warning {
    & > svg {
      color: ${(props) => props.inputOnFocus.warningColor};
    }
  }
  &.success {
    & > svg {
      color: ${(props) => props.inputOnFocus.successColor};
    }
  }
`

export const InfoMessage = styled.div<SharedProps>`
  padding-top: ${(props) => props.infoMessage.paddingTop};
  ${(props) => props.infoMessage.typography};
  width: 131px;

  &.error {
    color: ${(props) => props.inputOnFocus.errorColor};
  }
  &.warning {
    color: ${(props) => props.inputOnFocus.warningColor};
  }
  &.success {
    color: ${(props) => props.inputOnFocus.successColor};
  }
`

export const ListItem = styled.li<SharedProps>`
  ${(props) => props.infoMessage.typography};
  color: ${(props) => props.infoMessage.primaryTextColor};

  &.error {
    color: ${(props) => props.inputOnFocus.errorColor};
  }
  &.warning {
    color: ${(props) => props.inputOnFocus.warningColor};
  }
  &.success {
    color: ${(props) => props.inputOnFocus.successColor};
  }
`

export const ActionArea = styled.span<SharedProps>`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  background-color: ${(props) => props.icon.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 ${(props) => props.icon.borderRadius} ${(props) => props.icon.borderRadius} 0;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;

  &.error {
    border-top: 1px solid ${(props) => props.inputOnFocus.errorColor};
    border-right: 1px solid ${(props) => props.inputOnFocus.errorColor};
    border-bottom: 1px solid ${(props) => props.inputOnFocus.errorColor};
  }
  &.warning {
    border-top: 1px solid ${(props) => props.inputOnFocus.warningColor};
    border-right: 1px solid ${(props) => props.inputOnFocus.warningColor};
    border-bottom: 1px solid ${(props) => props.inputOnFocus.warningColor};
  }
  &.success {
    border-top: 1px solid ${(props) => props.inputOnFocus.successColor};
    border-right: 1px solid ${(props) => props.inputOnFocus.successColor};
    border-bottom: 1px solid ${(props) => props.inputOnFocus.successColor};
  }

  & > svg {
    color: ${(props) => props.icon.iconColor};
  }
`

export const VerificationWithToggle = styled(VerificationIcon)`
  right: 41px;

  &.error {
    & > svg {
      ${(props) => props.inputOnFocus.errorColor};
    }
  }
  &.warning {
    & > svg {
      ${(props) => props.inputOnFocus.warningColor};
    }
  }
  &.success {
    & > svg {
      ${(props) => props.inputOnFocus.successColor};
    }
  }
`

export const StyledInput = styled(GlobalInput)<SharedProps>`
  border-radius: ${(props) => props.input.borderRadius};
  padding-right: 46px;

  &.validation {
    padding-right: 80px;
  }

  &:focus {
    outline: none;

    & + span + span {
      border-top: 1px solid ${(props) => props.input.primaryBorder};
      border-right: 1px solid ${(props) => props.input.primaryBorder};
      border-bottom: 1px solid ${(props) => props.input.primaryBorder};
    }
  }

  &.error:focus {
    & + span + span {
      border-top: 1px solid ${(props) => props.inputOnFocus.errorColor};
      border-right: 1px solid ${(props) => props.inputOnFocus.errorColor};
      border-bottom: 1px solid ${(props) => props.inputOnFocus.errorColor};
    }
  }

  &.warning:focus {
    & + span + span {
      border-top: 1px solid ${(props) => props.inputOnFocus.warningColor};
      border-right: 1px solid ${(props) => props.inputOnFocus.warningColor};
      border-bottom: 1px solid ${(props) => props.inputOnFocus.warningColor};
    }
  }

  &.success:focus {
    & + span + span {
      border-top: 1px solid ${(props) => props.inputOnFocus.successColor};
      border-right: 1px solid ${(props) => props.inputOnFocus.successColor};
      border-bottom: 1px solid ${(props) => props.inputOnFocus.successColor};
    }
  }
`
