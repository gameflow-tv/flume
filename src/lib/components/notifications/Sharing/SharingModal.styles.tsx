import styled from 'styled-components'
import { typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'
import { ModalHeader } from '../Modal'

export const SharingHeader = styled(ModalHeader)`
  ${typographyToCss(theme.typography.header1)};
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 28px;
`
