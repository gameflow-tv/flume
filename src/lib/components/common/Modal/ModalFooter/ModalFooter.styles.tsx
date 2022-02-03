import styled from 'styled-components'
import { typographyToCss } from '../../../../theme'
import theme from '../../../../theme/theme'
import { ModalFooterProps } from './ModalFooter'

export const Footer = styled.div<ModalFooterProps>`
  color: ${(props) => props.color ?? theme.colors.tertiaryText};
  text-align: ${(props) => props.textAlign ?? 'center'};
  ${(props) => typographyToCss(theme.typography.body2)};
  margin-top: 32px;
  padding: 0 10px;
  display: ${(props) => props.display ?? null};
  align-content: ${(props) => props.alignContent ?? null};
  justify-content: ${(props) => props.justifyContent ?? null};
  align-items: ${(props) => props.alignItems ?? null};
`
