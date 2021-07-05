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

export const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: ${(props) => flexDirFromPosition(props.labelPosition)};
  gap: ${(props) => props.gap};
  &,
  > * {
    cursor: pointer;
  }
`

export type RangeProps = {
  orientation: string
  trackColor: string
  thumbColor: string
  transition: string
}

export const RangeWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
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

export const Range = styled.input.attrs({
  type: 'range'
})<RangeProps>`
  appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 15px;
  background: ${(props) => props.trackColor};
  transition: ${(props) => props.transition};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 17px;
    width: 17px;
    background: ${(props) => props.thumbColor};
    border-radius: 50%;
  }
`

export type SliderLabelProps = {
  labelTypography?: TypographyStyle
  labelColor?: string
}

export const SliderLabel = styled.label<SliderLabelProps>`
  color: ${(props) => props.labelColor};
  ${(props) => typographyToCss(props.labelTypography)}
`
