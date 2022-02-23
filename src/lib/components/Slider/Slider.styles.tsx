import styled from 'styled-components'
import { LabelPosition } from '../inputs'
import { Transition, transitionToCss, TypographyStyle, typographyToCss } from '../../theme'

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

export const Wrapper = styled.div<{ gap: string; labelPosition: LabelPosition }>`
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

export const RangeWrap = styled.div<{ labelPosition: LabelPosition }>`
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

export const RangeLabel = styled.label<{ color: string }>`
  color: ${(props) => props.color};
  padding: 0;
  margin: 0;
  margin-top: -3px;
`
export type RangeProps = {
  trackColor: string
  thumbColor: string
  transition: Transition
}

export const Range = styled.input.attrs({
  type: 'range'
})<RangeProps & { borderRadius: string }>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 15px;
  background: ${(props) => props.trackColor};
  transition: ${(props) => transitionToCss(props.transition)};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 17px;
    width: 17px;
    background: ${(props) => props.thumbColor};
    border-radius: ${(props) => props.borderRadius};
    border-color: ${(props) => props.thumbColor};
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    height: 15px;
    width: 15px;
    background: ${(props) => props.thumbColor};
    border-radius: ${(props) => props.borderRadius};
    border-color: ${(props) => props.thumbColor};
  }

  &::-moz-range-track {
    border: none;
  }
`

export const SliderLabel = styled.label<{
  typography: TypographyStyle
  color: string
  margin: string
}>`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  ${(props) => typographyToCss(props.typography)}
`
