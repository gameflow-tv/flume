import styled from 'styled-components'
import { typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'
import { ModalHeaderProps } from './ModalHeader'

export const Header = styled.div<ModalHeaderProps>`
  color: ${(props) => props.color ?? theme.colors.primaryText};
  ${(props) => typographyToCss(theme.typography.header1)};
  text-align: ${(props) => props.textAlign ?? 'center'};
  margin-bottom: 32px;
  padding: 0 10px;
  display: ${(props) => props.display ?? null};
  align-content: ${(props) => props.alignContent ?? null};
  justify-content: ${(props) => props.justifyContent ?? null};
  align-items: ${(props) => props.alignItems ?? null};
`
