import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { useTheme } from '../../../hooks'
import { isNullOrUndefined } from '../../../helpers/general'
import { TypographyStyle } from '../../../theme'
import AspectRatio from '../../common/AspectRatio/AspectRatio'
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

const getFirstDayOfWeek = () => {
  let lang = 'en-gb'
  if (typeof window !== 'undefined') {
    lang = navigator.language.toString().toLowerCase()
  }

  switch (lang) {
    case 'nn':
    case 'nb':
    case 'no':
    case 'nb-no':
    case 'nn-no':
    case 'it':
    case 'it-it':
    case 'es':
    case 'en-gb':
      return 1
    case 'pt':
    case 'en':
    case 'en-us':
    case 'pt-br':
    default:
      return 0
  }
}

const firstDay = getFirstDayOfWeek()

const getDayString = (dayIndex: number) => {
  const day = daysList.find((f) => f.id === dayIndex)
  return day.name
}

const getCalendarDOW = () => {
  let d = firstDay
  let weekIdx = 0

  const calendarDOW = [
    { name: 'Sun', id: 0, weekIndex: 0 },
    { name: 'Mon', id: 1, weekIndex: 0 },
    { name: 'Tue', id: 2, weekIndex: 0 },
    { name: 'Wed', id: 3, weekIndex: 0 },
    { name: 'Thu', id: 4, weekIndex: 0 },
    { name: 'Fri', id: 5, weekIndex: 0 },
    { name: 'Sat', id: 6, weekIndex: 0 }
  ]

  do {
    const idx = calendarDOW.findIndex((f) => f.id === d)
    calendarDOW[idx].weekIndex = weekIdx
    weekIdx++
    if (d + 1 > 6) d = -1
    d++
  } while (d != firstDay)

  return calendarDOW
}

const daysList = getCalendarDOW()

const getDayIndex = (dayIndex: number) => {
  const day = daysList.find((f) => f.id === dayIndex)
  return day.weekIndex
}

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
    // dayString: dayList[day]
    dayString: getDayString(day)
  }
}

const getMonthDetails = (year, month) => {
  const firstDay = getDayIndex(new Date(year, month).getDay())
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

  return day.timestamp === ref.valueOf() && day.month === 0
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
  dayBoxTextColor?: string
  dayBoxTypo?: TypographyStyle
  dateBoxBgColor?: string
  dateBoxTextColor?: string
  dateBoxTypo?: TypographyStyle
  dateBoxDisabledText?: string
  dateBoxDisabledTextColor?: string
  dateBoxSelectedBgColor?: string
  dateBoxSelectedtxtColor?: string
  dateBoxHoverBgColor?: string
  dateBoxHoverTextColor?: string
  defaultDate?: Date
  position?: string
  onDateSelect?: (timestamp: number) => void
}

export const Calendar = forwardRef((props: CalendarProps, ref) => {
  const theme = useTheme()
  const [selectedDate, setSelectedDate] = useState<number>(
    props.defaultDate ? props.defaultDate.valueOf() : 0
  )
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [monthDetails, setMonthDetails] = useState(
    getMonthDetails(today.getFullYear(), today.getMonth())
  )

  const styles = {
    calendarBgColor: props.calendarBgColor || theme.colors.card,
    dayBoxBgColor: props.dayBoxBgColor || 'transparent',
    dayBoxTextColor: props.dayBoxTextColor || theme.colors.tertiaryText,
    dayBoxTypo: theme.typography.body3,
    dateBoxBgColor: props.dateBoxBgColor || theme.colors.sliderBackground,
    dateBoxTextColor: props.dateBoxTextColor || theme.colors.secondaryText,
    dateBoxTypo: theme.typography.body1,
    dateBoxDisabledTextColor: props.dateBoxDisabledTextColor || theme.colors.calendarDisabledText,
    dateBoxSelectedBgColor: props.dateBoxSelectedBgColor || theme.colors.primary,
    dateBoxSelectedtxtColor: props.dateBoxSelectedtxtColor || theme.colors.onPrimary,
    dateBoxHoverBgColor: props.dateBoxHoverBgColor || theme.colors.calendarOnHover,
    dateBoxHoverTextColor: props.dateBoxHoverTextColor || theme.colors.dateBoxHoverTextColor,
    monthRows: Math.ceil(getNumberOfDays(today.getFullYear(), today.getMonth()) / 7),
    position: props.position,
    width: props.width
  }

  const onDateClick = (day) => {
    if (day && day.month === 0) {
      setSelectedDate(day.timestamp)
      props.onDateSelect ? props.onDateSelect.call(null, day.timestamp) : null
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

  const handleDate = useCallback((date: number) => {
    const dt = new Date(date)

    const y = dt.getFullYear(),
      m = dt.getMonth()
    setYear(y)
    setMonth(m)
    setMonthDetails(getMonthDetails(y, m))
  }, [])

  useEffect(() => {
    handleDate(selectedDate)
  }, [selectedDate])

  useImperativeHandle(ref, () => ({
    handleDay(offset: number) {
      const selected = new Date(selectedDate)
      selected.setDate(selected.getDate() + offset)
      setSelectedDate(selected.valueOf())
    },
    moveToDate(date: Date) {
      setSelectedDate(date.valueOf())
      handleDate(date.valueOf())
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
          {daysList
            .sort((a, b) => a.weekIndex - b.weekIndex)
            .map((day, idx) => (
              <DayBox key={idx} {...styles}>
                {day.name}
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
                  {...styles}
                >
                  {day.month !== 0
                    ? !isNullOrUndefined(props.dateBoxDisabledText)
                      ? props.dateBoxDisabledText
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
