import _ from 'lodash'
import React, { ReactNode, useContext } from 'react'
import {
  Range,
  RangeLabel,
  RangeLabelProps,
  RangeProps,
  RangeWrap,
  RangeWrapProps,
  SliderLabel,
  SliderLabelProps,
  Wrapper,
  WrapperProps
} from './Slider.styles'
import { ThemeContext, transitionToCss } from '../../../theme'

export type LabelPosition = 'left' | 'right' | 'top' | 'bottom'

export type SliderProps = {
  id?: string
  label?: string
  labelPosition?: LabelPosition
  value?: number
  min: number
  max: number
  minLabel?: ReactNode
  maxLabel?: ReactNode
  onChange?: (value: number) => void
}

export const Slider = ({
  id = _.uniqueId(),
  label,
  labelPosition,
  value,
  min,
  max,
  minLabel,
  maxLabel,
  onChange
}: SliderProps) => {
  const theme = useContext(ThemeContext)

  const styles: RangeProps & WrapperProps & SliderLabelProps & RangeLabelProps & RangeWrapProps = {
    trackColor: theme.colors.sliderBackground,
    thumbColor: theme.colors.primary,
    transition: transitionToCss(theme.transitions.short),
    gap: theme.spacing.xsmall,
    labelTypography: theme.typography.header5,
    labelColor: theme.colors.onTextField,
    labelPosition,
    labelMargin: theme.spacing.xxsmall
  }

  return (
    <Wrapper {...styles}>
      <SliderLabel htmlFor={id} {...styles}>
        {label}
      </SliderLabel>
      <RangeWrap {...styles}>
        <RangeLabel {...styles}>{minLabel}</RangeLabel>
        <Range
          id={id}
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange?.call(e.target.value)}
          {...styles}
        />
        <RangeLabel {...styles}>{maxLabel}</RangeLabel>
      </RangeWrap>
    </Wrapper>
  )
}
