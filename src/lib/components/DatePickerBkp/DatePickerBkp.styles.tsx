import styled from 'styled-components'

export const MyDatePicker = styled.div`
  &.MyDatePicker {
    float: left;
    position: relative;
    & * {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Chrome/Safari/Opera */
      -khtml-user-select: none; /* Konqueror */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently */
    }
  }
`
export const MdpInput = styled.div`
  &.mdp-input {
    float: left;
    width: 150px;
    height: 35px;
    overflow: hidden;
    border-radius: 20px;

    & > input {
      width: 125%;
      background: #f5f5f5;
      border: none;
      height: 35px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 11px;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
`
export const MdpContainer = styled.div`
  &.mdp-container {
    float: left;
    position: absolute;
    left: 0;
    top: 40px;
    width: 300px;
    min-height: 350px;
    background: #fff;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    overflow: hidden;
    padding: 25px 30px;
  }
`

export const MdpCHead = styled.div`
  &.mdpc-head {
    float: left;
    width: 100%;
    height: 53px;
  }
`

export const MdpcHButton = styled.div`
  &.mdpch-button {
    float: left;
    width: 45px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }
`
export const MdpchbInner = styled.div`
  &.mdpchb-inner {
    float: left;
    height: 35px;
    width: 35px;
    background: #f4f4f4;
    border-radius: 100%;
    line-height: 35px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -17px;
    margin-top: -17px;

    &:hover {
      cursor: pointer;
      background: #eee;

      & > span {
        border-color: #555 !important;
      }
    }
  }
`

export const Mdpchbi = styled.span`
  &.mdpchbi-right-arrows:after,
  &.mdpchbi-left-arrows:after,
  &.mdpchbi-right-arrow,
  &.mdpchbi-right-arrows,
  &.mdpchbi-left-arrow,
  &.mdpchbi-left-arrows {
    display: block;
    float: left;
    width: 6px;
    height: 6px;
    border-left: 2px solid #888;
    border-bottom: 2px solid #888;
    position: absolute;
  }
`

export const MdpchC = styled.div`
  &.mdpch-container {
    float: left;
    width: 120px;
    height: 100%;
  }
`

export const MdpchcY = styled.div`
  &.mdpchc-year {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 27px;
    color: #666;
    font-weight: 200px;
    text-align: center;
  }
`

export const MdpchcM = styled.div`
  &.mdpchc-month {
    float: left;
    width: 100%;
    height: 15px;
    font-size: 13px;
    color: #666;
    font-weight: 200px;
    text-align: center;
  }
`
export const MdpcBody = styled.div`
  &.mdpc-body {
    float: left;
    width: 100%;
    margin-top: 20px;
  }
`

export const CContainer = styled.div`
  &.c-container {
    width: 100%;
    height: 100%;

    &.c-container,
    > .cc-month,
    .cc-head,
    .cch-name,
    .cc-body,
    .cdc-day span,
    .cdc-day,
    .c-day-container {
      position: relative;
      display: block;
      float: left;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
`
export const CCHead = styled.div`
  &.cc-head {
    height: 30px;
    width: 100%;
    margin-top: 10px;
  }
`

export const CchName = styled.div`
  &.cch-name {
    width: 14.285%;
    height: 30px;
    line-height: 30px;
    font-weight: 700;
    color: #666;
    font-size: 9px;
    text-align: center;
  }
`

export const CcBody = styled.div`
  &.cc-body {
    height: 270px;
    width: 100%;
  }
`

export const CDayContainer = styled.div`
  &.c-day-container {
    width: 14.285%;
    height: 16.6666%;

    &.disabled {
      pointer-events: none;
    }

    &.disabled .cdc-day span {
      color: #ddd;
    }
    &.disabled .cdc-day span {
      background: #fff !important;
    }
    &.highlight .cdc-day span {
      background: #efdbca;
    }
    &.highlight-green .cdc-day span {
      background: #d4e2cb;
    }
  }
`

export const CdcDay = styled.div`
  &.cdc-day {
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 300;
    color: #444;
    text-align: center;

    > span {
      width: 100%;
      height: 100%;
      font-size: 12px;
      font-weight: 300;
      color: #444;
      width: 30px;
      height: 30px;
      margin-top: -15px;
      margin-left: -15px;
      left: 50%;
      top: 50%;
      font-weight: 400;
      border-radius: 100%;
      line-height: 30px;
      &:hover {
        cursor: pointer;
        background: #eee;
      }
    }
  }
`
