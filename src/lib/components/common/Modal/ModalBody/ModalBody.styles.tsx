import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../../theme'

export const Body = styled.div<{
  display?: string
  alignContent?: string
  justifyContent?: string
  alignItems?: string
  color: string
  typography: TypographyStyle
  textAlign?: string
  scrollbarColor: string
}>`
  display: ${(props) => props.display ?? null};
  align-content: ${(props) => props.alignContent ?? null};
  justify-content: ${(props) => props.justifyContent ?? null};
  align-items: ${(props) => props.alignItems ?? null};
  position: relative;
  color: ${(props) => props.color};
  ${(props) => typographyToCss(props.typography)}
  text-align: ${(props) => props.textAlign ?? 'center'};
  overflow: auto;
  padding: 0 10px;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.scrollbarColor} transparent;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => props.scrollbarColor};
  }

  &::-webkit-scrollbar-button {
    width: 5px;
    background: transparent;
    height: 5px;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`
