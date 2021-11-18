import styled from 'styled-components'
import theme from '../../../../theme/theme'

export type SharedProps = {
  disabled?: boolean
  cursor?: string
  width?: string
  height?: string
  label?: {
    textColor: string
    margin: string
    typography: string
  }
  input?: {
    backgroundColor: string
    borderRadius: string
    padding: string
    textColor: string
    borderColor: string
    primaryBorder: string
    typography: string
    placeholder: string
    transition: string
    onFocus?: {
      errorColor: string
      warningColor: string
      successColor: string
    }
    disabled?: {
      backgroundColor: string
      borderColor: string
    }
    onHover?: {
      borderColor: string
    }
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
  ${(props) => props.label.typography}
  text-transform: capitalize;
  color: ${(props) => props.label.textColor};
  margin: 0 0 ${(props) => props.label.margin} 0;
`

export const GlobalInput = styled.input.attrs((props) => ({
  type: props.type
}))<SharedProps>`
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : props.cursor)};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.input.backgroundColor};
  border-radius: ${(props) => props.input.borderRadius};
  padding: ${(props) => props.input.padding};
  color: ${(props) => props.input.textColor};
  ${(props) => props.input.typography};
  border: none;
  border: 1px solid ${(props) => props.input.borderColor}; /* Change to prop and use default color */
  display: flex;
  align-items: center;
  transition: ${(props) => props.input.transition};

  &:hover {
    border: 1px solid ${(props) => props.input.onHover.borderColor};
  }
  &::placeholder {
    color: ${(props) => props.input.placeholder};
  }

  &.validation {
    padding-right: 41px;
  }

  &.error,
  &.error:focus {
    border: 1px solid ${(props) => props.input?.onFocus?.errorColor};
  }
  &.warning,
  &.warning:focus {
    border: 1px solid ${(props) => props.input?.onFocus?.warningColor};
  }
  &.success,
  &.success:focus {
    border: 1px solid ${(props) => props.input?.onFocus?.successColor};
  }

  &:focus {
    border: 1px solid ${(props) => props.input?.primaryBorder};
    outline: none;
  }

  &:disabled {
    background-color: ${(props) => props.input?.disabled?.backgroundColor};
    opacity: 0.5;
    border: 1px solid ${(props) => props.input?.disabled?.borderColor};
  }
`

export const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputGroup = styled.div<SharedProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => props.width};
`

export const VerificationIcon = styled.span<SharedProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.icon?.iconPadding};
  border: none;
  position: absolute;
  right: 0;

  &.error {
    & > svg {
      color: ${(props) => props.input?.onFocus?.errorColor};
    }
  }
  &.warning {
    & > svg {
      color: ${(props) => props.input?.onFocus?.warningColor};
    }
  }
  &.success {
    & > svg {
      color: ${(props) => props.input?.onFocus?.successColor};
    }
  }
`

export const InfoMessage = styled.div<SharedProps>`
  padding-top: ${(props) => props.infoMessage?.paddingTop};
  ${(props) => props.infoMessage?.typography};
  width: ${(props) => props.width};
  color: ${(props) => props.infoMessage?.primaryTextColor};

  &.error {
    color: ${(props) => props.input?.onFocus?.errorColor};
  }
  &.warning {
    color: ${(props) => props.input?.onFocus?.warningColor};
  }
  &.success {
    color: ${(props) => props.input?.onFocus?.successColor};
  }
`

export const ListItem = styled.li<SharedProps>`
  ${(props) => props.infoMessage?.typography};
  color: ${(props) => props.infoMessage?.primaryTextColor};

  &.error {
    color: ${(props) => props.input?.onFocus?.errorColor};
  }
  &.warning {
    color: ${(props) => props.input?.onFocus?.warningColor};
  }
  &.success {
    color: ${(props) => props.input?.onFocus?.successColor};
  }
`

export const ActionArea = styled.span<SharedProps>`
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  background-color: ${(props) => props.icon?.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 ${(props) => props.icon?.borderRadius} ${(props) => props.icon?.borderRadius} 0;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;

  &.error {
    border-top: 1px solid ${(props) => props.input?.onFocus?.errorColor};
    border-right: 1px solid ${(props) => props.input?.onFocus?.errorColor};
    border-bottom: 1px solid ${(props) => props.input?.onFocus?.errorColor};
  }
  &.warning {
    border-top: 1px solid ${(props) => props.input?.onFocus?.warningColor};
    border-right: 1px solid ${(props) => props.input?.onFocus?.warningColor};
    border-bottom: 1px solid ${(props) => props.input?.onFocus?.warningColor};
  }
  &.success {
    border-top: 1px solid ${(props) => props.input?.onFocus?.successColor};
    border-right: 1px solid ${(props) => props.input?.onFocus?.successColor};
    border-bottom: 1px solid ${(props) => props.input?.onFocus?.successColor};
  }

  & > svg {
    color: ${(props) => props.icon?.iconColor};
  }
`

export const VerificationWithToggle = styled(VerificationIcon)`
  right: 41px;

  &.error {
    & > svg {
      ${(props) => props.input?.onFocus?.errorColor};
    }
  }
  &.warning {
    & > svg {
      ${(props) => props.input?.onFocus?.warningColor};
    }
  }
  &.success {
    & > svg {
      ${(props) => props.input?.onFocus?.successColor};
    }
  }
`

export const StyledInput = styled(GlobalInput)<SharedProps>`
  border-radius: ${(props) => props.input?.borderRadius};
  padding-right: 46px;

  &.validation {
    padding-right: 80px;
  }

  &:focus {
    outline: none;

    & + span + span {
      border-top: 1px solid ${(props) => props.input?.primaryBorder};
      border-right: 1px solid ${(props) => props.input?.primaryBorder};
      border-bottom: 1px solid ${(props) => props.input?.primaryBorder};
    }
  }

  &.error:focus {
    & + span + span {
      border-top: 1px solid ${(props) => props.input?.onFocus?.errorColor};
      border-right: 1px solid ${(props) => props.input?.onFocus?.errorColor};
      border-bottom: 1px solid ${(props) => props.input?.onFocus?.errorColor};
    }
  }

  &.warning:focus {
    & + span + span {
      border-top: 1px solid ${(props) => props.input?.onFocus?.warningColor};
      border-right: 1px solid ${(props) => props.input?.onFocus?.warningColor};
      border-bottom: 1px solid ${(props) => props.input?.onFocus?.warningColor};
    }
  }

  &.success:focus {
    & + span + span {
      border-top: 1px solid ${(props) => props.input?.onFocus?.successColor};
      border-right: 1px solid ${(props) => props.input?.onFocus?.successColor};
      border-bottom: 1px solid ${(props) => props.input?.onFocus?.successColor};
    }
  }
`
