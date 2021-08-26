import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { useTheme } from '../../../hooks'
import { isNullOrUndefined } from '../../helpers/general'
import { TypographyStyle } from '../../theme'
import AspectRatio from '../AspectRatio/AspectRatio'
import {
  DateBox,
  DayBox,
  CalendarWrapper,
  DateGrid,
  MonthWapper,
  ControlWrapper,
  ControlGrid,
  NavBtn,
  MonthDescription
} from './Calendar.styles'

const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const today = new Date()

const getNumberOfDays = (year, month) => {
  return 40 - new Date(year, month, 40).getDate()
}

const getDayDetails = (args) => {
  const date = args.index - args.firstDay
  const day = args.index % 7
  let prevMonth = args.month - 1
  let prevYear = args.year
  if (prevMonth < 0) {
    prevMonth = 11
    prevYear--
  }
  const prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth)
  const _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1
  const month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0
  const timestamp = new Date(args.year, args.month, _date).valueOf()

  return {
    date: _date,
    day,
    month,
    timestamp,
    dayString: dayList[day]
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

  return day.timestamp === selectedTimestamp && day.month === 0
}

const getMonthStr = (month) => monthList[Math.max(Math.min(11, month), 0)] || 'Month'

export type CalendarProps = {
  width?: string
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
  defaultDate?: Date
  position?: string
  onDateSelect?: (timestamp: number) => void
}

export const Calendar = forwardRef((props: CalendarProps, ref) => {
  const theme = useTheme()
  const [selectedDate, setSelectedDate] = useState<number>(props.defaultDate?.valueOf())
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [monthDetails, setMonthDetails] = useState(
    getMonthDetails(today.getFullYear(), today.getMonth())
  )

  const styles = {
    calendarBgColor: props.calendarBgColor || theme.colors.card,
    dayBoxBgColor: props.dayBoxBgColor || 'transparent',
    dayBoxTxtColor: props.dayBoxTxtColor || theme.colors.tertiaryText,
    dayBoxTypo: theme.typography.body3,
    dateBoxBgColor: props.dateBoxBgColor || theme.colors.sliderBackground,
    dateBoxTxtColor: props.dateBoxTxtColor || theme.colors.secondaryText,
    dateBoxTypo: theme.typography.body1,
    dateBoxDisabledTxtColor: props.dateBoxDisabledTxtColor || theme.colors.calendarDisabledText,
    dateBoxSelectedBgColor: props.dateBoxSelectedBgColor || theme.colors.primary,
    dateBoxSelectedtxtColor: props.dateBoxSelectedtxtColor || theme.colors.onPrimary,
    dateBoxHoverBgColor: props.dateBoxHoverBgColor || theme.colors.calendarOnHover,
    dateBoxHoverTxtColor: props.dateBoxHoverTxtColor || theme.colors.dateBoxHoverTxtColor,
    monthRows: Math.ceil(getNumberOfDays(today.getFullYear(), today.getMonth()) / 7),
    position: props.position,
    width: props.width
  }

  const onDateClick = (day) => {
    if (day && day.month === 0) {
      setSelectedDate(day.timestamp)
      props.onDateSelect?.call(null, day.timestamp)
    }
  }

  const handleMonth = (offset: number) => {
    let y = year
    let m = month + offset
    if (m === -1) {
      m = 11
      y--
    } else if (m === 12) {
      m = 0
      y++
    }

    setYear(y)
    setMonth(m)
    setMonthDetails(getMonthDetails(y, m))
  }

  useImperativeHandle(ref, () => ({
    handleDay(offset: number) {
      const selected = new Date(selectedDate)
      selected.setDate(selected.getDate() + offset)
      setSelectedDate(selected.valueOf())
    }
  }))

  return (
    <CalendarWrapper {...styles}>
      <ControlWrapper>
        <ControlGrid>
          <AspectRatio aspectRatio={100}>
            <NavBtn className="prevmtharea" onClick={() => handleMonth(-1)} {...styles}>
              <FontAwesomeIcon icon={faLongArrowLeft} />
            </NavBtn>
          </AspectRatio>
          <MonthDescription className="mthdescarea" {...styles}>
            {getMonthStr(month)} {year}
          </MonthDescription>
          <AspectRatio aspectRatio={100}>
            <NavBtn className="nextmtharea" onClick={() => handleMonth(1)} {...styles}>
              <FontAwesomeIcon icon={faLongArrowRight} />
            </NavBtn>
          </AspectRatio>
        </ControlGrid>
      </ControlWrapper>
      <MonthWapper>
        <DateGrid {...styles}>
          {dayList.map((day, idx) => (
            <DayBox key={idx} {...styles}>
              {day}
            </DayBox>
          ))}

          {monthDetails.map((day, idx) => {
            return (
              <AspectRatio key={`ar_${idx}`} aspectRatio={100}>
                <DateBox
                  key={idx}
                  className={
                    (day.month !== 0 ? ' disabled' : '') +
                    (isCurrentDay(day) ? ' today' : '') +
                    (isSelectedDay(day, selectedDate) ? ' selected' : '')
                  }
                  onClick={() => onDateClick(day)}
                  {...styles}>
                  {day.month !== 0
                    ? !isNullOrUndefined(props.dateBoxDisabledTxt)
                      ? props.dateBoxDisabledTxt
                      : day.date
                    : day.date}
                </DateBox>
              </AspectRatio>
            )
          })}
        </DateGrid>
      </MonthWapper>
    </CalendarWrapper>
  )
})
