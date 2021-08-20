import styled from 'styled-components'
import { typographyToCss } from '../../theme'
import { CalendarProps } from './Calendar'

export const Container = styled.div<CalendarProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 12px;
  background-color: ${(props) => props.calendarBgColor};
  display: grid;
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
  color: ${(props) => props.dayBoxTxtColor};
  ${(props) => typographyToCss(props.dayBoxTypo)};
  text-transform: uppercase;
`

export const DateBox = styled.div<CalendarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.dateBoxBgColor};
  border-radius: 4px;
  color: ${(props) => props.dateBoxTxtColor};
  ${(props) => typographyToCss(props.dateBoxTypo)};

  &:hover {
    background-color: ${(props) => props.dateBoxHoverBgColor};
    color: ${(props) => props.dateBoxHoverTxtColor};
  }
  &.today {
    border: 1px solid ${(props) => props.dateBoxSelectedBgColor};
  }
  &.selected {
    background-color: ${(props) => props.dateBoxSelectedBgColor};
    color: ${(props) => props.dateBoxSelectedtxtColor};
  }

  &.disabled {
    color: ${(props) => props.dateBoxDisabledTxtColor};
  }
`
