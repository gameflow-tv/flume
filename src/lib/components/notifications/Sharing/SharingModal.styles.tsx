import styled from 'styled-components'
import { ModalHeader } from '..'
import { typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'

export const Header = styled(ModalHeader)`
  ${typographyToCss(theme.typography.header1)};
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 28px;
`
