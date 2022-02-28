import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../theme'

export const CalendarWrapper = styled.div<{ position?: string; width: string; background: string }>`
  position: ${(props) => props.position || 'relative'};
  width: ${(props) => props.width};
  height: auto;
  min-width: 304px;
  min-height: 290px;
  border-radius: 4px;
  padding: 12px;
  background-color: ${(props) => props.background};
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

export const NavBtn = styled.div<{
  background: string
  color: string
  hoverBackground: string
  hoverColor: string
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  border-radius: 4px;
  cursor: pointer;

  & > svg {
    color: ${(props) => props.color};
  }

  &:hover {
    background-color: ${(props) => props.hoverBackground};

    & > svg {
      color: ${(props) => props.hoverColor};
    }
  }
`

export const MonthDescription = styled.p<{ typography: TypographyStyle; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => typographyToCss(props.typography)};
  font-weight: 600;
  color: ${(props) => props.color};
  text-transform: uppercase;
`

export const MonthWapper = styled.div`
  display: block;
  width: 100%;
  height: 81.38%;
  min-height: 238px;
`

export const DateGrid = styled.div`
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
export const DayBox = styled.div<{
  color: string
  tyopgraphy: TypographyStyle
}>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  color: ${(props) => props.color};
  ${(props) => typographyToCss(props.tyopgraphy)};
  text-transform: uppercase;
`

export const DateBox = styled.div<{
  background: string
  color: string
  typography: TypographyStyle
  hoverBackground: string
  hoverColor: string
  activeBackground: string
  activeColor: string
  disabledColor: string
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  border-radius: 4px;
  color: ${(props) => props.color};
  ${(props) => typographyToCss(props.typography)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBackground};
    color: ${(props) => props.hoverColor};
  }
  &.today {
    border: 1px solid ${(props) => props.activeBackground};
  }
  &.selected {
    background-color: ${(props) => props.activeBackground};
    color: ${(props) => props.activeColor};
  }

  &.disabled {
    color: ${(props) => props.disabledColor};
  }
`
