import {
  TypographyStyle,
  typographyToCss,
  Transition,
  transitionToCss,
  Theme
} from '../../../theme'
import styled from 'styled-components'

type InputProps = {
  typography?: TypographyStyle
  backgroundColor?: string
  foregroundColor?: string
  transition?: Transition
  borderRadius: string
  shadow: string
  glow: string
  padding: string
  outline: string
}

export const Input = styled.input<InputProps>`
  color: ${(props) => props.foregroundColor};
  width: 300px;
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.shadow};
  ${(props) => typographyToCss(props.typography)};
  background-color: ${(props) => props.backgroundColor};
  transition: ${(props) => transitionToCss(props.transition)};
  &:hover {
    box-shadow: ${(props) => props.glow};
    outline: none;
    border: none;
  }
  &:focus {
    box-shadow: 0px 0px 0px 1px ${(props) => props.outline};
    outline: none;
    border: none;
  }
  outline: none;
  border: none;
`

export const Wrapper = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-begin;
  justify-content: center;
  gap: ${(props) => props.gap};
`

type ListItemProps = {
  typography?: TypographyStyle
  color?: string
}

export const ListItem = styled.li<ListItemProps>`
  ${(props) => typographyToCss(props.typography)};
  color: ${(props) => props.color};
`

type LabelProps = {
  typography?: TypographyStyle
  color?: string
  for?: string
}

export const Label = styled.label<LabelProps>`
  ${(props) => typographyToCss(props.typography)};
  color: ${(props) => props.color};
`
