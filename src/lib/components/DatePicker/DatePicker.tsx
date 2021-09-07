import { faCalendarAlt, faLongArrowLeft, faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { useTheme } from '../../../hooks'
import { TypographyStyle } from '../../theme'
import AspectRatio from '../AspectRatio/AspectRatio'
import { Calendar } from '../Calendar'
import { DateInput, DateSpan, Grid, NavBtn, Wrapper } from './DatePicker.styles'

export type DatePickerProps = {
  width?: string
  navBgColor?: string
  navTxtColor?: string
  navHoverBgColor?: string
  navHoverTxtColor?: string
  inputTypo?: TypographyStyle
  shadow?: string
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
  navTxtColor,
  navHoverBgColor,
  navHoverTxtColor
}: DatePickerProps) => {
  const theme = useTheme()
  const [selectedDate, setSelectedDate] = useState<Date>(getToday())
  const [dateValue, setDateValue] = useState<string>(formatFieldValue(getToday()))
  const [dayLabel, setDayLabel] = useState(getFormatedDate(getToday()))
  const [editionMode, setEditionMode] = useState<boolean>(false)

  const styles = {
    width: width || '328px',
    navBgColor: navBgColor || theme.colors.card,
    navTxtColor: navTxtColor || theme.colors.secondaryText,
    navHoverBgColor: navHoverBgColor || theme.colors.calendarOnHover,
    navHoverTxtColor: navHoverTxtColor || theme.colors.dateBoxHoverTxtColor,
    inputTypo: theme.typography.body1,
    shadow: theme.colors.shimmerBackground
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
      setSelectedDate(selected)
      setDayLabel(getFormatedDate(selected))
      if (calRef?.current !== null) {
        calRef?.current.moveToDate(selected)
      }
    }
  }

  const handleCalendar = (timestamp: number) => {
    const selected = new Date(timestamp)
    setSelectedDate(selected)
    setDayLabel(getFormatedDate(selected))
    setDateValue(formatFieldValue(selected))
  }

  const calRef = useRef(null)

  const handleDay = (offset) => {
    if (calRef?.current !== null) {
      calRef?.current.handleDay(offset)
    }
    const date = selectedDate
    date.setDate(date.getDate() + offset)
    setSelectedDate(date)
    setDayLabel(getFormatedDate(date))
  }

  return (
    <Wrapper {...styles}>
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
