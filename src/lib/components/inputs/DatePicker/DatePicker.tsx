import React, { useRef, useState } from 'react'
import { Icon } from '../../icons'
import { useTheme } from '../../../hooks'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { TypographyStyle } from '../../../theme'
import { AspectRatio } from '../../common/AspectRatio/AspectRatio'
import { Calendar } from '../Calendar'
import { DateInput, DateSpan, Grid, NavBtn, Wrapper } from './DatePicker.styles'

export type DatePickerProps = {
  width?: string
  height?: string
  navBgColor?: string
  navTextColor?: string
  navHoverBgColor?: string
  navHoverTextColor?: string
  inputTypo?: TypographyStyle
  shadow?: string
  value?: Date
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
  height,
  navBgColor,
  navTextColor,
  navHoverBgColor,
  navHoverTextColor,
  value,
  onDateChange,
  zIndex
}: DatePickerProps) => {
  const theme = useTheme()
  const pickerRef = useRef(null)
  const [selectedDate, setSelectedDate] = useState<Date>(value || getToday())
  const [dateValue, setDateValue] = useState<string>(formatFieldValue(value || getToday()))
  const [dayLabel, setDayLabel] = useState(getFormatedDate(value || getToday()))
  const [editionMode, setEditionMode] = useState<boolean>(false)
  useOutsideClick(pickerRef, () => setEditionMode(false))

  const styles = {
    width: width || '328px',
    height: height || '45px',
    navBgColor: navBgColor || theme.colors.card,
    navTextColor: navTextColor || theme.colors.secondaryText,
    navHoverBgColor: navHoverBgColor || theme.colors.calendarOnHover,
    navHoverTextColor: navHoverTextColor || theme.colors.dateBoxHoverTextColor,
    inputTypo: theme.typography.body1,
    shadow: theme.shadows.xsmall,
    zIndex
  }

  const setNewDate = (date: Date) => {
    setSelectedDate(new Date(date))
    if (onDateChange) {
      onDateChange(date ? date : new Date())
    }
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
        {/* <AspectRatio aspectRatio={100}> */}
        <NavBtn className="prevmtharea" onClick={() => handleDay(-1)} {...styles}>
          <Icon icon="arrow_left" size="large" />
        </NavBtn>
        {/* </AspectRatio> */}
        <DateInput className="mthdescarea" onClick={handleEdition} {...styles}>
          <Icon icon="calendar" />
          {editionMode ? (
            <input type="date" value={dateValue} onChange={handleDate} />
          ) : (
            <DateSpan {...styles}>{dayLabel}</DateSpan>
          )}
        </DateInput>
        {/* <AspectRatio aspectRatio={100}> */}
        <NavBtn className="nextmtharea" onClick={() => handleDay(1)} {...styles}>
          <Icon icon="arrow_right" size="large" />
        </NavBtn>
        {/* </AspectRatio> */}
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
