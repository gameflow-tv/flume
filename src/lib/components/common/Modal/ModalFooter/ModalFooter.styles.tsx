import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../../theme'
import { ModalFooterProps } from './ModalFooter'

export const Footer = styled.div<{
  color: string
  typography: TypographyStyle
  display?: string
  textAlign?: string
  alignContent?: string
  justifyContent?: string
  alignItems?: string
}>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign ?? 'center'};
  ${(props) => typographyToCss(props.typography)};
  margin-top: 32px;
  padding: 0 10px;
  display: ${(props) => props.display ?? null};
  align-content: ${(props) => props.alignContent ?? null};
  justify-content: ${(props) => props.justifyContent ?? null};
  align-items: ${(props) => props.alignItems ?? null};
`
