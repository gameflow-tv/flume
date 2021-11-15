import { faCalendarAlt, faLongArrowLeft, faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { useTheme } from '../../../hooks'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { TypographyStyle } from '../../../theme'
import AspectRatio from '../../common/AspectRatio/AspectRatio'
import { Calendar } from '../Calendar'
import { DateInput, DateSpan, Grid, NavBtn, Wrapper } from './DatePicker.styles'

export type DatePickerProps = {
  width?: string
  navBgColor?: string
  navTextColor?: string
  navHoverBgColor?: string
  navHoverTextColor?: string
  inputTypo?: TypographyStyle
  shadow?: string
  onDateChange?: (date: Date) => void
  zIndex?: number
}

const getToday = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

const getYesterday = () => {
  const yesterday = getToday()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}

const getTomorrow = () => {
  const tomorrow = getToday()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow
}

const getFormatedDate = (date?: Date) => {
  date.setHours(0, 0, 0, 0)
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const monthList = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]

  switch (date.getTime()) {
    case getToday().getTime():
      return 'TODAY'
    case getYesterday().getTime():
      return 'YESTERDAY'
    case getTomorrow().getTime():
      return 'TOMORROW'
    default:
      return `${dayList[date.getDay()]} ${date.getDate().toString().padStart(2, '0')} ${
        monthList[date.getMonth()]
      }`
  }
}

const formatFieldValue = (dt: Date) => {
  return `${dt.getFullYear().toString().padStart(4, '0')}-${(dt.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}`
}

export const DatePicker = ({
  width,
  navBgColor,
  navTextColor,
  navHoverBgColor,
  navHoverTextColor,
  onDateChange,
  zIndex
}: DatePickerProps) => {
  const theme = useTheme()
  const pickerRef = useRef(null)
  const [selectedDate, setSelectedDate] = useState<Date>(getToday())
  const [dateValue, setDateValue] = useState<string>(formatFieldValue(getToday()))
  const [dayLabel, setDayLabel] = useState(getFormatedDate(getToday()))
  const [editionMode, setEditionMode] = useState<boolean>(false)
  useOutsideClick(pickerRef, () => setEditionMode(false))

  const styles = {
    width: width || '328px',
    navBgColor: navBgColor || theme.colors.card,
    navTextColor: navTextColor || theme.colors.secondaryText,
    navHoverBgColor: navHoverBgColor || theme.colors.calendarOnHover,
    navHoverTextColor: navHoverTextColor || theme.colors.dateBoxHoverTextColor,
    inputTypo: theme.typography.body1,
    shadow: theme.colors.shimmerBackground,
    zIndex
  }

  const setNewDate = (date: Date) => {
    setSelectedDate(new Date(date))
    onDateChange?.call(null, date ? date : new Date())
  }

  const handleEdition = (e) => {
    if (e.target.tagName === 'INPUT') {
      if (!editionMode) setEditionMode(true)
    } else {
      setEditionMode(!editionMode)
    }
  }

  const handleDate = (e) => {
    const val = e.target.value

    if (val && val.length > 0) {
      setDateValue(val)
      const dt = val.split('-').map((d) => parseInt(d))
      const selected = new Date(dt[0], dt[1] - 1, dt[2])
      setNewDate(selected)
      setDayLabel(getFormatedDate(selected))
      if (calRef ? calRef.current !== null : false) {
        calRef.current.moveToDate(selected)
      }
    }
  }

  const handleCalendar = (timestamp: number) => {
    const selected = new Date(timestamp)
    setNewDate(selected)
    setDayLabel(getFormatedDate(selected))
    setDateValue(formatFieldValue(selected))
  }

  const calRef = useRef(null)

  const handleDay = (offset) => {
    if (calRef ? calRef.current !== null : false) {
      calRef.current.handleDay(offset)
    }
    const date = selectedDate
    date.setDate(date.getDate() + offset)
    setNewDate(date)
    setDateValue(formatFieldValue(date))
    setDayLabel(getFormatedDate(date))
  }

  return (
    <Wrapper ref={pickerRef} {...styles}>
      <Grid>
        <AspectRatio aspectRatio={100}>
          <NavBtn className="prevmtharea" onClick={() => handleDay(-1)} {...styles}>
            <FontAwesomeIcon icon={faLongArrowLeft} />
          </NavBtn>
        </AspectRatio>
        <DateInput className="mthdescarea" onClick={handleEdition} {...styles}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          {editionMode ? (
            <input type="date" value={dateValue} onChange={handleDate} />
          ) : (
            <DateSpan {...styles}>{dayLabel}</DateSpan>
          )}
        </DateInput>
        <AspectRatio aspectRatio={100}>
          <NavBtn className="nextmtharea" onClick={() => handleDay(1)} {...styles}>
            <FontAwesomeIcon icon={faLongArrowRight} />
          </NavBtn>
        </AspectRatio>
      </Grid>
      <div style={{ position: 'relative' }}>
        {editionMode && (
          <Calendar
            ref={calRef}
            position={'absolute'}
            defaultDate={selectedDate}
            onDateSelect={handleCalendar}
          />
        )}
      </div>
    </Wrapper>
  )
}
