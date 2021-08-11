import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../theme'
import theme from '../../../theme/theme'

export const Wrapper = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  ${theme.typography.body2};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export type SpanProps = {
  typography?: TypographyStyle
  width?: string
  height?: string
  checkedBackground: string
  uncheckedBackground: string
  uncheckedBorder: string
  checkedTextColor: string
  uncheckedTextColor: string
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
      border-color: ${(props) => props.checkedBackground};
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
  position: absolute;
  width: ${(props) => props.width || '21px'};
  height: ${(props) => props.height || '21px'};
  background-color: ${(props) => props.uncheckedBackground};
  border: 1px solid ${(props) => props.uncheckedBorder};
  border-radius: ${theme.spacing.xxsmall};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.uncheckedTextColor};
  ${(props) => typographyToCss(props.typography)};
`
