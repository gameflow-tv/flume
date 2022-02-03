import styled from 'styled-components'
import { typographyToCss } from '../../../../theme'
import theme from '../../../../theme/theme'
import { ModalBodyProps } from './ModalBody'

export const Body = styled.div<ModalBodyProps>`
  display: ${(props) => props.display ?? null};
  align-content: ${(props) => props.alignContent ?? null};
  justify-content: ${(props) => props.justifyContent ?? null};
  align-items: ${(props) => props.alignItems ?? null};
  position: relative;
  color: ${(props) => props.color ?? theme.colors.secondaryText};
  ${(props) => typographyToCss(theme.typography.body1)}
  text-align: ${(props) => props.textAlign ?? 'center'};
  overflow: auto;
  padding: 0 10px;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => theme.colors.primary} transparent;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => theme.colors.primary};
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
