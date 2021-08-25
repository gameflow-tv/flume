import styled from 'styled-components'
import { typographyToCss } from '../../theme'
import { DatePickerProps } from './DatePicker'

export const Wrapper = styled.div<DatePickerProps>`
  display: inline-block;
  width: ${(props) => props.width};
  /* height: auto; */
  height: 45px;
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

export const NavBtn = styled.div<DatePickerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.navBgColor};
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 6px ${(props) => props.shadow};

  & > svg {
    color: ${(props) => props.navTxtColor};
  }

  &:hover {
    background-color: ${(props) => props.navHoverBgColor};

    & > svg {
      color: ${(props) => props.navHoverTxtColor};
    }
  }
`

export const DateInput = styled.div<DatePickerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => typographyToCss(props.inputTypo)};
  background-color: ${(props) => props.navBgColor};
  color: ${(props) => props.navTxtColor};
  cursor: pointer;
  box-shadow: 0px 2px 6px ${(props) => props.shadow};
  border-radius: 4px;

  & > input {
    border: none;
    text-align: center;
    text-transform: uppercase;
    ${(props) => typographyToCss(props.inputTypo)};
    color: ${(props) => props.navTxtColor};
    background-color: transparent;
    cursor: text;

    &::-webkit-calendar-picker-indicator {
      display: none;
    }

    &:focus {
      outline: none;
    }
  }
`

export const DateSpan = styled.div<DatePickerProps>`
  ${(props) => typographyToCss(props.inputTypo)};
  color: ${(props) => props.navTxtColor};
  background-color: transparent;
  margin-left: 8px;
`
