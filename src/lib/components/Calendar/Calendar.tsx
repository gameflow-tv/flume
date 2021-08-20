import React from 'react'
import { useTheme } from '../../../hooks'
import { isNullOrUndefined } from '../../helpers/general'
import { TypographyStyle } from '../../theme'
import { DateBox, Container, DayBox } from './Calendar.styles'

export type CalendarProps = {
  calendarBgColor?: string
  dayBoxBgColor?: string
  dayBoxTxtColor?: string
  dayBoxTypo?: TypographyStyle
  dateBoxBgColor?: string
  dateBoxTxtColor?: string
  dateBoxTypo?: TypographyStyle
  dateBoxDisabledTxt?: string
  dateBoxDisabledTxtColor?: string
  dateBoxSelectedBgColor?: string
  dateBoxSelectedtxtColor?: string
  dateBoxHoverBgColor?: string
  dateBoxHoverTxtColor?: string
}

export const Calendar = ({
  calendarBgColor,
  dayBoxBgColor,
  dayBoxTxtColor,
  dayBoxTypo,
  dateBoxBgColor,
  dateBoxTxtColor,
  dateBoxTypo,
  dateBoxDisabledTxt,
  dateBoxDisabledTxtColor,
  dateBoxSelectedBgColor,
  dateBoxSelectedtxtColor,
  dateBoxHoverBgColor,
  dateBoxHoverTxtColor
}: CalendarProps) => {
  const theme = useTheme()
  const dayBox = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const roso = [
    25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5
  ]

  const styles = {
    calendarBgColor: calendarBgColor || theme.colors.card,
    dayBoxBgColor: dayBoxBgColor || 'transparent',
    dayBoxTxtColor: dayBoxTxtColor || theme.colors.tertiaryText,
    dayBoxTypo: dayBoxTypo || theme.typography.body3,
    dateBoxBgColor: dateBoxBgColor || theme.colors.sliderBackground,
    dateBoxTxtColor: dateBoxTxtColor || theme.colors.secondaryText,
    dateBoxTypo: dateBoxTypo || theme.typography.body1,
    dateBoxDisabledTxtColor: dateBoxDisabledTxtColor || theme.colors.calendarDisabledText,
    dateBoxSelectedBgColor: dateBoxSelectedBgColor || theme.colors.primary,
    dateBoxSelectedtxtColor: dateBoxSelectedtxtColor || theme.colors.onPrimary,
    dateBoxHoverBgColor: dateBoxHoverBgColor || theme.colors.calendarOnHover,
    dateBoxHoverTxtColor: dateBoxHoverTxtColor || theme.colors.dateBoxHoverTxtColor
  }

  return (
    <Container {...styles}>
      {dayBox.map((day, idx) => (
        <DayBox key={idx} {...styles}>
          {day}
        </DayBox>
      ))}

      {roso.map((day, idx) => {
        const dis = day > 30
        const today = new Date().getDate() === day
        const selectedDate = new Date().getDate() === day + 2

        return (
          <DateBox
            key={idx}
            className={`${dis && 'disabled'} ${today && 'today'} ${selectedDate && 'selected'}`}
            {...styles}>
            {dis === true
              ? !isNullOrUndefined(dateBoxDisabledTxt)
                ? dateBoxDisabledTxt
                : day
              : day}
          </DateBox>
        )
      })}
    </Container>
  )
}
