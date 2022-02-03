import styled from 'styled-components'
import { typographyToCss } from '../../../../theme'
import theme from '../../../../theme/theme'
import { Button, IconButton } from '../../../buttons'
import { ModalBody } from '../ModalBody/ModalBody'
import { ModalHeader } from '../ModalHeader/ModalHeader'

export const SharingHeader = styled(ModalHeader)`
  ${typographyToCss(theme.typography.header2)};
  font-weight: 600;
  margin-top: 28px;
`

export const SharingBody = styled(ModalBody)`
  margin: 32px 48px 28px 48px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 2px 0;
`

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SocialButton = styled(IconButton)`
  margin: 0;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`

export const SocialLink = styled.a`
  margin: 0;
  margin-right: 8px;
  &:focus,
  &:active {
    outline: none;
  }
  &:last-child {
    margin-right: 0;
  }
  & > button {
    margin: 0;
  }
`

export const SharingButton = styled(Button)`
  font-family: ${theme.typography.button.fontFamily};
  font-size: ${theme.typography.button.fontSize};
  font-weight: ${theme.typography.button.fontWeight};
  line-height: ${theme.typography.button.lineHeight};
`
