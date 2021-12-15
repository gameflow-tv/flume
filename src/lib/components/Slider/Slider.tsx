import _ from 'lodash'
import React, { ChangeEventHandler, ReactNode } from 'react'
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
import { transitionToCss } from '../../theme'
import { useTheme } from '../../hooks'
import { LabelPosition } from '../inputs'

export type SliderProps = {
  id?: string
  label?: string
  labelPosition?: LabelPosition
  value?: number
  min: number
  max: number
  minLabel?: ReactNode
  maxLabel?: ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement>
  step?: string | number
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
  onChange,
  step
}: SliderProps) => {
  const theme = useTheme()

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
          onChange={(e) => onChange && onChange(e)}
          step={step}
          {...styles}
        />
        <RangeLabel {...styles}>{maxLabel}</RangeLabel>
      </RangeWrap>
    </Wrapper>
  )
}
