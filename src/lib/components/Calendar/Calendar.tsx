import React, { useState } from 'react'
import { useTheme } from '../../../hooks'
import { isNullOrUndefined } from '../../helpers/general'
import { TypographyStyle } from '../../theme'
import { DateBox, Container, DayBox } from './Calendar.styles'

const dayBox = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const today = new Date()

const getNumberOfDays = (year, month) => {
  return 40 - new Date(year, month, 40).getDate()
}

const getDayDetails = (args) => {
  let date = args.index - args.firstDay
  let day = args.index % 7
  let prevMonth = args.month - 1
  let prevYear = args.year
  if (prevMonth < 0) {
    prevMonth = 11
    prevYear--
  }
  let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth)
  let _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1
  let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0
  let timestamp = new Date(args.year, month, _date).valueOf()
  return {
    date: _date,
    day,
    month,
    timestamp,
    dayString: dayBox[day]
  }
}

const getMonthDetails = (year, month) => {
  const firstDay = new Date(year, month).getDay()
  const numberOfDays = getNumberOfDays(year, month)
  const monthArray = []
  const rows = 6
  const cols = 7
  let currentDay = null
  let index = 0

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      currentDay = getDayDetails({
        index,
        numberOfDays,
        firstDay,
        year,
        month
      })
      monthArray.push(currentDay)
      index++
    }
  }

  return monthArray
}

const isCurrentDay = (day) => {
  const ref = today
  ref.setHours(0, 0, 0, 0)

  return day.timestamp === ref.valueOf()
}

const isSelectedDay = (day, selectedTimestamp?: number) => {
  if (!selectedTimestamp) {
    return false
  }

  return day.timestamp === selectedTimestamp
}

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
  initialDate?: Date
  monthRows: number
  onDateSelect?: (timestamp: number) => void
}

export const Calendar = ({
  calendarBgColor,
  dayBoxBgColor,
  dayBoxTxtColor,
  dateBoxBgColor,
  dateBoxTxtColor,
  dateBoxDisabledTxt,
  dateBoxDisabledTxtColor,
  dateBoxSelectedBgColor,
  dateBoxSelectedtxtColor,
  dateBoxHoverBgColor,
  dateBoxHoverTxtColor,
  initialDate,
  onDateSelect
}: CalendarProps) => {
  const theme = useTheme()
  const [selectedDay, setSelectedDay] = useState<number>(initialDate?.valueOf())
  const [monthDetails, setMonthDetails] = useState(
    getMonthDetails(new Date(today).getFullYear(), new Date(today).getMonth())
  )

  const styles = {
    calendarBgColor: calendarBgColor || theme.colors.card,
    dayBoxBgColor: dayBoxBgColor || 'transparent',
    dayBoxTxtColor: dayBoxTxtColor || theme.colors.tertiaryText,
    dayBoxTypo: theme.typography.body3,
    dateBoxBgColor: dateBoxBgColor || theme.colors.sliderBackground,
    dateBoxTxtColor: dateBoxTxtColor || theme.colors.secondaryText,
    dateBoxTypo: theme.typography.body1,
    dateBoxDisabledTxtColor: dateBoxDisabledTxtColor || theme.colors.calendarDisabledText,
    dateBoxSelectedBgColor: dateBoxSelectedBgColor || theme.colors.primary,
    dateBoxSelectedtxtColor: dateBoxSelectedtxtColor || theme.colors.onPrimary,
    dateBoxHoverBgColor: dateBoxHoverBgColor || theme.colors.calendarOnHover,
    dateBoxHoverTxtColor: dateBoxHoverTxtColor || theme.colors.dateBoxHoverTxtColor,
    monthRows: Math.ceil(getNumberOfDays(today.getFullYear(), today.getMonth()) / 7)
  }

  const onDateClick = (day) => {
    if (day && day.month === 0) {
      setSelectedDay(day.timestamp)
      onDateSelect?.call(day.timestamp)
    }
  }

  return (
    <Container {...styles}>
      {dayBox.map((day, idx) => (
        <DayBox key={idx} {...styles}>
          {day}
        </DayBox>
      ))}

      {monthDetails.map((day, idx) => {
        return idx / 7 < styles.monthRows ? (
          <DateBox
            key={idx}
            className={
              (day.month !== 0 ? ' disabled' : '') + 
              (isCurrentDay(day) ? ' today' : '') +
              (isSelectedDay(day, selectedDay) ? ' selected' : '')
            }
            onClick={() => onDateClick(day)}
            {...styles}>
            {day.month !== 0
              ? !isNullOrUndefined(dateBoxDisabledTxt)
                ? dateBoxDisabledTxt
                : day.date
              : day.date}
          </DateBox>
        ) : null
      })}
    </Container>
  )
}
