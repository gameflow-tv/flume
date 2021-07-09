import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../theme'

export type SearchInputProps = {
  borderColor: string
  color: string
  shadow: string
  borderRadius: string
  padding: string
  typography: TypographyStyle
  outline: string
}

export const Search = styled.input<SearchInputProps>`
  width: 302px;
  height: 41px;
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  background: #36393b;
  border: 1px solid ${(props) => props.borderColor};
  box-sizing: border-box;
  color: ${(props) => props.color};
  box-shadow: ${(props) => props.shadow};
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(120%);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px ${(props) => props.outline};
  }

  ${(props) => typographyToCss(props.typography)}
`
export const Wrapper = styled.div`
  position: relative;
`

export type IconProps = {
  size: string
  color: string
}

export const Icon = styled.span<IconProps>`
  position: absolute;
  right: 15px;
  top: 0;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
