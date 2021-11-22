import styled from 'styled-components'
import { typographyToCss } from '../../theme'
import { CalendarProps } from './Calendar'

export const CalendarWrapper = styled.div<CalendarProps>`
  position: ${(props) => props.position || 'relative'};
  width: ${(props) => props.width};
  height: auto;
  min-width: 304px;
  min-height: 290px;
  border-radius: 4px;
  padding: 12px;
  background-color: ${(props) => props.calendarBgColor};
`

export const ControlWrapper = styled.section`
  display: block;
  height: 13.79%;
  min-height: 40px;
  margin-bottom: 4.83%;
`

export const ControlGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  gap: 4px;
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

export const NavBtn = styled.div<CalendarProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.dateBoxBgColor};
  border-radius: 4px;
  cursor: pointer;

  & > svg {
    color: ${(props) => props.dateBoxTextColor};
  }

  &:hover {
    background-color: ${(props) => props.dateBoxHoverBgColor};

    & > svg {
      color: ${(props) => props.dateBoxHoverTextColor};
    }
  }
`

export const MonthDescription = styled.p<CalendarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => typographyToCss(props.dateBoxTypo)};
  font-weight: 600;
  color: ${(props) => props.dateBoxHoverTextColor};
  text-transform: uppercase;
`

export const MonthWapper = styled.div`
  display: block;
  width: 100%;
  height: 81.38%;
  min-height: 238px;
`

export const DateGrid = styled.div<CalendarProps>`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: stretch;
  justify-items: stretch;
  justify-content: center;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 0.4fr repeat(6, 1fr);
  gap: 4px;
`

// Cell to define the day of week name
export const DayBox = styled.div<CalendarProps>`
  background-color: ${(props) => props.dayBoxBgColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  color: ${(props) => props.dayBoxTextColor};
  ${(props) => typographyToCss(props.dayBoxTypo)};
  text-transform: uppercase;
`

export const DateBox = styled.div<CalendarProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.dateBoxBgColor};
  border-radius: 4px;
  color: ${(props) => props.dateBoxTextColor};
  ${(props) => typographyToCss(props.dateBoxTypo)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.dateBoxHoverBgColor};
    color: ${(props) => props.dateBoxHoverTextColor};
  }
  &.today {
    border: 1px solid ${(props) => props.dateBoxSelectedBgColor};
  }
  &.selected {
    background-color: ${(props) => props.dateBoxSelectedBgColor};
    color: ${(props) => props.dateBoxSelectedtxtColor};
  }

  &.disabled {
    color: ${(props) => props.dateBoxDisabledTextColor};
  }
`
