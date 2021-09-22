import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../theme'

export const Wrapper = styled.label<{ typography: TypographyStyle }>`
  display: block;
  position: relative;
  cursor: pointer;
  ${(props) => typographyToCss(props.typography)};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export type SpanProps = {
  typography: TypographyStyle
  width?: string
  height?: string
  checkedBackground: string
  uncheckedBackground: string
  uncheckedBorder: string
  checkedBorder?: string
  checkedTextColor: string
  uncheckedTextColor: string
  spacing: string
}

export const CheckInput = styled.input.attrs({
  type: 'checkbox'
})<SpanProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked {
    & ~ span {
      background-color: ${(props) => props.checkedBackground};
      border-color: ${(props) => props.checkedBorder || props.checkedBackground};
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      color: ${(props) => props.checkedTextColor};
      ${(props) => typographyToCss(props.typography)};
    }
  }
`

export const SpanEl = styled.span<SpanProps>`
  /* The position line below was commented due to affecting the display flex in some components
  position: absolute; */
  width: ${(props) => props.width || '21px'};
  height: ${(props) => props.height || '21px'};
  background-color: ${(props) => props.uncheckedBackground};
  border: 1px solid ${(props) => props.uncheckedBorder};
  border-radius: ${(props) => props.spacing};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.uncheckedTextColor};
  ${(props) => typographyToCss(props.typography)};
`
