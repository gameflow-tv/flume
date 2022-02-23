import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { useAmbiance, useTheme } from '../../../hooks'
import { isNullOrUndefined } from '../../../helpers/general'
import { TypographyStyle } from '../../../theme'
import { AspectRatio } from '../../common/AspectRatio/AspectRatio'
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
import { Icon } from '../../icons'
import { Ambiance, AmbianceContext } from '../../../providers/AmbianceProvider'

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

interface DayOfWeek {
  id: number
  name: string
  weekIndex: number
}

const getCalendarDOW = (): DayOfWeek[] => {
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

const getNumberOfDays = (year: number, month: number) => {
  return 40 - new Date(year, month, 40).getDate()
}

interface Day {
  date: number
  day: number
  month: number
  timestamp: number
  dayString: string
  name?: string
}

const getDay = ({
  index,
  firstDay,
  month,
  year,
  numberOfDays
}: {
  index: number
  firstDay: number
  month: number
  year: number
  numberOfDays: number
}): Day => {
  const date = index - firstDay
  const day = index % 7
  let prevMonth = month - 1
  let prevYear = year
  if (prevMonth < 0) {
    prevMonth = 11
    prevYear--
  }
  const prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth)
  const _date = (date < 0 ? prevMonthNumberOfDays + date : date % numberOfDays) + 1
  const _month = date < 0 ? -1 : date >= numberOfDays ? 1 : 0
  const timestamp = new Date(year, month, _date).valueOf()

  return {
    date: _date,
    day,
    month: _month,
    timestamp,
    // dayString: dayList[day]
    dayString: getDayString(day)
  }
}

const getMonthDetails = (year: number, month: number): Day[] => {
  const firstDay = getDayIndex(new Date(year, month).getDay())
  const numberOfDays = getNumberOfDays(year, month)
  const monthArray = []
  const rows = 6
  const cols = 7
  let currentDay = null
  let index = 0

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      currentDay = getDay({
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

const isCurrentDay = (day: Day): boolean => {
  const ref = today
  ref.setHours(0, 0, 0, 0)

  return day.timestamp === ref.valueOf() && day.month === 0
}

const isSelectedDay = (day: Day, selectedTimestamp?: number) => {
  if (!selectedTimestamp) {
    return false
  }

  return day.timestamp === selectedTimestamp && day.month === 0
}

const getMonthStr = (month: number) => monthList[Math.max(Math.min(11, month), 0)] || 'Month'

export type CalendarProps = {
  width?: string
  defaultDate?: Date
  position?: string
  onDateSelect?: (timestamp: number) => void
}

export const Calendar = forwardRef(
  ({ width, defaultDate, position, onDateSelect }: CalendarProps, ref) => {
    const theme = useTheme()
    const ambiance = useAmbiance()
    const [selectedDate, setSelectedDate] = useState<number>(
      defaultDate ? defaultDate.valueOf() : 0
    )
    const [month, setMonth] = useState(today.getMonth())
    const [year, setYear] = useState(today.getFullYear())
    const [monthDetails, setMonthDetails] = useState(
      getMonthDetails(today.getFullYear(), today.getMonth())
    )

    const monthRows = Math.ceil(getNumberOfDays(today.getFullYear(), today.getMonth()) / 7)

    const onDateClick = (day: Day) => {
      if (day && day.month === 0) {
        setSelectedDate(day.timestamp)
        onDateSelect ? onDateSelect.call(null, day.timestamp) : null
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
      <CalendarWrapper width={width} background={ambiance.color} position={position}>
        <Ambiance>
          <AmbianceContext.Consumer>
            {(ambiance) => (
              <>
                <ControlWrapper>
                  <ControlGrid>
                    <AspectRatio aspectRatio={100}>
                      <NavBtn
                        className="prevmtharea"
                        onClick={() => handleMonth(-1)}
                        color={theme.colors.icon}
                        background={ambiance.color}
                        hoverBackground={ambiance.child.color}
                        hoverColor={theme.colors.header}
                      >
                        <Icon icon="arrow_left" size="large" />
                      </NavBtn>
                    </AspectRatio>
                    <MonthDescription
                      className="mthdescarea"
                      typography={theme.typography.body1}
                      color={theme.colors.header}
                    >
                      {getMonthStr(month)} {year}
                    </MonthDescription>
                    <AspectRatio aspectRatio={100}>
                      <NavBtn
                        className="nextmtharea"
                        onClick={() => handleMonth(1)}
                        color={theme.colors.icon}
                        background={ambiance.color}
                        hoverBackground={ambiance.child.color}
                        hoverColor={theme.colors.header}
                      >
                        <Icon icon="arrow_right" size="large" />
                      </NavBtn>
                    </AspectRatio>
                  </ControlGrid>
                </ControlWrapper>
                <MonthWapper>
                  <DateGrid>
                    {daysList
                      .sort((a, b) => a.weekIndex - b.weekIndex)
                      .map((day, idx) => (
                        <DayBox
                          key={idx}
                          color={theme.colors.subtitle}
                          tyopgraphy={theme.typography.body3}
                        >
                          {day.name}
                        </DayBox>
                      ))}

                    {monthDetails.map((day, index) => {
                      return (
                        <AspectRatio key={`ar_${index}`} aspectRatio={100}>
                          <DateBox
                            key={index}
                            color={theme.colors.header}
                            typography={theme.typography.body1}
                            background={ambiance.color}
                            hoverBackground={ambiance.child.color}
                            hoverColor={theme.colors.header}
                            activeBackground={theme.colors.primary}
                            activeColor={theme.colors.onPrimary}
                            disabledColor={theme.colors.inactive}
                            className={
                              (day.month !== 0 ? ' disabled' : '') +
                              (isCurrentDay(day) ? ' today' : '') +
                              (isSelectedDay(day, selectedDate) ? ' selected' : '')
                            }
                            onClick={() => onDateClick(day)}
                          >
                            {day.date}
                            {day.name}
                          </DateBox>
                        </AspectRatio>
                      )
                    })}
                  </DateGrid>
                </MonthWapper>
              </>
            )}
          </AmbianceContext.Consumer>
        </Ambiance>
      </CalendarWrapper>
    )
  }
)
