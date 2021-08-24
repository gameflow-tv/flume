import styled from 'styled-components'
import { DatePickerProps } from './DatePicker'

export const Wrapper = styled.div<DatePickerProps>`
  display: inline-block;
  width: ${(props) => props.width};
  /* height: auto; */
  height: 45px;
  background-color: purple;
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
