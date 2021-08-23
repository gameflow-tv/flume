import React, { useEffect, useRef, useState } from 'react'
import {
  CcBody,
  CCHead,
  CchName,
  CContainer,
  CDayContainer,
  CdcDay,
  MdpcBody,
  Mdpchbi,
  MdpchbInner,
  MdpcHButton,
  MdpchC,
  MdpchcM,
  MdpchcY,
  MdpCHead,
  MdpContainer,
  MdpInput,
  MyDatePicker
} from './DatePicker.styles'

export type DatePickerProps = {
  onChange?: (value: number) => void
}

let oneDay = 60 * 60 * 24 * 1000
let todayTimestamp = Date.now() - (Date.now() % oneDay) + new Date().getTimezoneOffset() * 1000 * 60

const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthMap = [
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
  let timestamp = new Date(args.year, args.month, _date).getTime()
  return {
    date: _date,
    day,
    month,
    timestamp,
    dayString: daysMap[day]
  }
}

const getDateStringFromTimestamp = (timestamp) => {
  let dateObject = new Date(timestamp)
  let month = dateObject.getMonth() + 1
  let date = dateObject.getDate()
  return (
    dateObject.getFullYear() +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (date < 10 ? '0' + date : date)
  )
}

const getDateFromDateString = (dateValue) => {
  let dateData = dateValue.split('-').map((d) => parseInt(d, 10))
  if (dateData.length < 3) return null

  let year = dateData[0]
  let month = dateData[1]
  let date = dateData[2]
  return { year, month, date }
}

const getMonthStr = (month) => monthMap[Math.max(Math.min(11, month), 0)] || 'Month'

const isCurrentDay = (day) => {
  return day.timestamp === todayTimestamp
}

export const DatePicker = ({ onChange }: DatePickerProps) => {
  const inputRef = useRef<HTMLInputElement>()
  const dpRef = useRef<HTMLDivElement>()
  const date = new Date()
  const [showDatePicker, setShowDatePicker] = useState<boolean>(true)
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth())
  const [selectedDay, setSelectedDay] = useState(todayTimestamp)
  const [monthDetails, setMonthDetails] = useState(
    getMonthDetails(date.getFullYear(), date.getMonth())
  )

  const setDateToInput = (timestamp) => {
    let dateString = getDateStringFromTimestamp(timestamp)
    inputRef.current.value = dateString
  }

  const setDate = (dateData) => {
    let sd = new Date(dateData.year, dateData.month - 1, dateData.date).getTime()
    setSelectedDay(sd)
    onChange?.call(sd)
  }

  const addBackDrop = (e) => {
    if (showDatePicker && dpRef?.current !== null && !dpRef?.current?.contains(e.target)) {
      setShowDatePicker(false)
    }
  }

  const updateDateFromInput = () => {
    let dateValue = inputRef.current.value
    let dateData = getDateFromDateString(dateValue)
    if (dateData !== null) {
      setDate(dateData)
      setYear(dateData.year)
      setMonth(dateData.month - 1)
      setMonthDetails(getMonthDetails(dateData.year, dateData.month - 1))
    }
  }

  const isSelectedDay = (day) => {
    return day.timestamp === selectedDay
  }

  const handleYear = (offset) => {
    const y = year + offset
    setYear(y)
    setMonthDetails(getMonthDetails(y, month))
  }

  const handleMonth = (offset) => {
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

  const onDateClick = (day) => {
    setSelectedDay(day.timestamp)
    setDateToInput(day.timestamp)
    onChange?.call(day.timestamp)
  }

  useEffect(() => {
    window.addEventListener('click', addBackDrop)
    setDateToInput(selectedDay)
  }, [])

  const renderCalendar = () => {
    let days = monthDetails.map((day, index) => {
      return (
        <CDayContainer
          className={
            'c-day-container ' +
            (day.month !== 0 ? ' disabled' : '') +
            (isCurrentDay(day) ? ' highlight' : '') +
            (isSelectedDay(day) ? ' highlight-green' : '')
          }
          key={index}>
          <CdcDay className="cdc-day">
            <span onClick={() => onDateClick(day)}>{day.date}</span>
          </CdcDay>
        </CDayContainer>
      )
    })
    return (
      <CContainer className="c-container">
        <CCHead className="cc-head">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, i) => (
            <CchName key={i} className="cch-name">
              {d}
            </CchName>
          ))}
        </CCHead>
        <CcBody className="cc-body">{days}</CcBody>
      </CContainer>
    )
  }

  return (
    <MyDatePicker className="MyDatePicker" ref={dpRef}>
      <MdpInput className="mdp-input" onClick={() => setShowDatePicker(true)}>
        <input type="date" onChange={updateDateFromInput} ref={inputRef} />
      </MdpInput>
      {showDatePicker ? (
        <MdpContainer className="mdp-container">
          <MdpCHead className="mdpc-head">
            <MdpcHButton className="mdpch-button">
              <MdpchbInner className="mdpchb-inner" onClick={() => handleYear(-1)}>
                <Mdpchbi className="mdpchbi-left-arrows"></Mdpchbi>
              </MdpchbInner>
            </MdpcHButton>
            <MdpcHButton className="mdpch-button">
              <MdpchbInner className="mdpchb-inner" onClick={() => handleMonth(-1)}>
                <Mdpchbi className="mdpchbi-left-arrow"></Mdpchbi>
              </MdpchbInner>
            </MdpcHButton>
            <MdpchC className="mdpch-container">
              <MdpchcY className="mdpchc-year">{year}</MdpchcY>
              <MdpchcM className="mdpchc-month">{getMonthStr(month)}</MdpchcM>
            </MdpchC>
            <MdpcHButton className="mdpch-button">
              <MdpchbInner className="mdpchb-inner" onClick={() => handleMonth(1)}>
                <Mdpchbi className="mdpchbi-right-arrow"></Mdpchbi>
              </MdpchbInner>
            </MdpcHButton>
            <MdpcHButton className="mdpch-button" onClick={() => handleYear(1)}>
              <MdpchbInner className="mdpchb-inner">
                <Mdpchbi className="mdpchbi-right-arrows"></Mdpchbi>
              </MdpchbInner>
            </MdpcHButton>
          </MdpCHead>
          <MdpcBody className="mdpc-body">{renderCalendar()}</MdpcBody>
        </MdpContainer>
      ) : (
        ''
      )}
    </MyDatePicker>
  )
}
