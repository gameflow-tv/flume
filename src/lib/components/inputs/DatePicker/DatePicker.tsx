import React, { useRef, useState } from 'react'
import { Icon } from '../../icons'
import { useAmbiance, useTheme } from '../../../hooks'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { TypographyStyle } from '../../../theme'
import { Calendar } from '../Calendar'
import { DateInput, DateSpan, Grid, Wrapper } from './DatePicker.styles'
import { IconButton } from '../../buttons/IconButton'

export type DatePickerProps = {
  width?: string
  inputTypography?: TypographyStyle
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

export const DatePicker = ({ width, value, onDateChange, zIndex }: DatePickerProps) => {
  const theme = useTheme()
  const ambiance = useAmbiance()
  const pickerRef = useRef(null)
  const [selectedDate, setSelectedDate] = useState<Date>(value || getToday())
  const [dateValue, setDateValue] = useState<string>(formatFieldValue(value || getToday()))
  const [dayLabel, setDayLabel] = useState(getFormatedDate(value || getToday()))
  const [editable, setEditable] = useState<boolean>(false)
  useOutsideClick(pickerRef, () => setEditable(false))

  const setNewDate = (date: Date) => {
    setSelectedDate(new Date(date))
    if (onDateChange) {
      onDateChange(date ? date : new Date())
    }
  }

  const handleEdit = (e) => {
    if (e.target.tagName === 'INPUT') {
      if (!editable) setEditable(true)
    } else {
      setEditable(!editable)
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
    <Wrapper ref={pickerRef}>
      <Grid>
        <IconButton onClick={() => handleDay(-1)} icon="arrow_left" size="large" />
        <DateInput
          className="mthdescarea"
          onClick={handleEdit}
          typography={theme.typography.body1}
          background={ambiance.color}
          hoverBackground={ambiance.child.color}
          transition={theme.transitions.short}
          color={theme.colors.header}
          shadow={theme.shadows.xsmall}
        >
          <Icon icon="calendar" />
          {editable ? (
            <input type="date" value={dateValue} onChange={handleDate} />
          ) : (
            <DateSpan typography={theme.typography.body1} color={theme.colors.header}>
              {dayLabel}
            </DateSpan>
          )}
        </DateInput>
        <IconButton onClick={() => handleDay(1)} icon="arrow_right" size="large" />
      </Grid>
      <div style={{ position: 'relative' }}>
        {editable && (
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
