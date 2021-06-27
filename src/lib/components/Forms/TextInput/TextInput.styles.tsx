import { TypographyStyle, typographyToCss } from '@theme/typography'
import { Transition, transitionToCss } from '@theme/transitions'
import styled from 'styled-components'

type InputProps = {
typography?: TypographyStyle
backgroundColor?: string
transition?: Transition
}

export const Input =
  styled.input <
  InputProps >
  `
  width: 300px;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  ${(props) => typographyToCss(props.typography)};
  background-color: ${(props) => props.backgroundColor};
  transition: ${(props) => transitionToCss(props.transition)};
  &:hover {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5);
    outline: none;
    border: none;
  }
  &:focus {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
    outline: none;
    border: none;
  }
  outline: none;
  border: none;
`

type ListItemProps = {
typography?: TypographyStyle
color?: string
}

export const ListItem =
  styled.li <
  ListItemProps >
  `
  ${(props) => typographyToCss(props.typography)};
  color: ${(props) => props.color};
`

type LabelProps = {
typography?: TypographyStyle
}

export const Label =
  styled.label <
  LabelProps >
  `
  ${(props) => typographyToCss(props.typography)};
`
