import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../../theme'

export const Header = styled.div<{
  color: string
  typography: TypographyStyle
  textAlign?: string
  display?: string
  alignContent?: string
  justifyContent?: string
  alignItems?: string
}>`
  color: ${(props) => props.color};
  ${(props) => typographyToCss(props.typography)};
  text-align: ${(props) => props.textAlign ?? 'center'};
  margin-bottom: 32px;
  padding: 0 10px;
  display: ${(props) => props.display ?? null};
  align-content: ${(props) => props.alignContent ?? null};
  justify-content: ${(props) => props.justifyContent ?? null};
  align-items: ${(props) => props.alignItems ?? null};
`
