import styled from 'styled-components'
import { Transition, transitionToCss, TypographyStyle, typographyToCss } from '../../../theme'
import { IconButton } from '../../buttons/IconButton'
import { DatePickerProps } from './DatePicker'

export const Wrapper = styled.div<DatePickerProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.width};
  height: 45px;
  z-index: ${(props) => (props.zIndex ? props.zIndex : 'inherit')};
`

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 8px;
  grid-auto-flow: row;
  grid-template-areas: 'prevmtharea mthdescarea nextmtharea';
  margin-bottom: 8px;

  & > .prevmtharea {
    grid-area: prevmtharea;
  }

  & > .mthdescarea {
    grid-area: mthdescarea;
  }

  & > .nextmtharea {
    grid-area: nextmtharea;
  }
`

export const NavBtn = styled(IconButton)<{ shadow: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: ${(props) => props.shadow};
`

export const DateInput = styled.div<{
  typography: TypographyStyle
  background: string
  hoverBackground: string
  color: string
  shadow: string
  transition: Transition
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => typographyToCss(props.typography)};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  cursor: pointer;
  box-shadow: ${(props) => props.shadow};
  border-radius: 4px;
  transition: ${(props) => transitionToCss(props.transition)};

  &:hover {
    background-color: ${(props) => props.hoverBackground};
  }

  & > input {
    border: none;
    text-align: center;
    text-transform: uppercase;
    ${(props) => typographyToCss(props.typography)};
    color: ${(props) => props.color};
    background-color: transparent;
    cursor: text;

    &::-webkit-calendar-picker-indicator {
      display: none;
    }

    &::-webkit-clear-button {
      display: none;
    }

    &:focus {
      outline: none;
    }
  }

  @-moz-document url-prefix() {
    input[type='date'] {
      clip-path: inset(0 17px 0 0);
    }
  }
`

export const DateSpan = styled.div<{ typography: TypographyStyle; color: string }>`
  ${(props) => typographyToCss(props.typography)};
  color: ${(props) => props.color};
  background-color: transparent;
  margin-left: 8px;
`
