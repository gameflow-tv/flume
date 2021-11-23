import styled from 'styled-components'
import { typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'
import { Button, IconButton } from '../../buttons'
import { Icon } from '../../icons'
import { ModalBody, ModalHeader } from '../Modal'

export const SharingHeader = styled(ModalHeader)`
  ${typographyToCss(theme.typography.header1)};
  font-size: 1.5rem;
  font-weight: normal;
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

export const SocialLink = styled.a`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`

export const SharingButton = styled(Button)`
  ${typographyToCss(theme.typography.button)};
`
