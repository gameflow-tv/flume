import React from 'react'
import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../theme'
import { LabelPosition } from './Slider'

export type WrapperProps = {
  gap: string
  labelPosition?: LabelPosition
}

const flexDirFromPosition = (position: LabelPosition): string => {
  switch (position) {
    case 'bottom':
      return 'column-reverse'
    case 'left':
      return 'row'
    case 'right':
      return 'row-reverse'
    case 'top':
    default:
      return 'column'
  }
}

const adjustVerticalPosition = (position: LabelPosition): string => {
  switch (position) {
    case 'left':
      return 'margin-left: -43px'
    case 'right':
      return 'margin-right: -43px'
  }
}

export const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: ${(props) => flexDirFromPosition(props.labelPosition)};
  width: 100%;
  gap: ${(props) => props.gap};
  &,
  > * {
    cursor: pointer;
  }
`

export type RangeWrapProps = {
  labelPosition: LabelPosition
}

export const RangeWrap = styled.div<RangeWrapProps>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;

  &[orientation='vertical'] {
    flex-direction: column;
    ${(props) => {
      return adjustVerticalPosition(props.labelPosition)
    }}
  }
`

export type RangeLabelProps = {
  labelColor: string
}

export const RangeLabel = styled.label<RangeLabelProps>`
  color: ${(props) => props.labelColor};
  padding: 0;
  margin: 0;
  margin-top: -3px;
`
export type RangeProps = {
  trackColor: string
  thumbColor: string
  transition: string
}

export const Range = styled.input.attrs({
  type: 'range'
})<RangeProps>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 15px;
  background: ${(props) => props.trackColor};
  transition: ${(props) => props.transition};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 17px;
    width: 17px;
    background: ${(props) => props.thumbColor};
    border-radius: 50%;
    border-color: ${(props) => props.thumbColor};
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    height: 15px;
    width: 15px;
    background: ${(props) => props.thumbColor};
    border-radius: 50%;
    border-color: ${(props) => props.thumbColor};
  }

  &::-moz-range-track {
    border: none;
  }
`

export type SliderLabelProps = {
  labelTypography?: TypographyStyle
  labelColor?: string
  labelMargin?: string
}

export const SliderLabel = styled.label<SliderLabelProps>`
  color: ${(props) => props.labelColor};
  margin: ${(props) => props.labelMargin || '4px'};
  ${(props) => typographyToCss(props.labelTypography)}
`