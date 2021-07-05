import _ from 'lodash'
import React, { useContext } from 'react'
import { Pats, Range, RangeProps } from './Slider.styles'
import { ThemeContext, transitionToCss } from '../../../theme'
import { SwitchTrackProps } from '../Switch/Switch.styles'

export type SliderOrientation = 'horizontal' | 'vertical'

export type SliderProps = {
  id?: string
  orientation?: SliderOrientation
  value: number
  min: number
  max: number
  onChange?: (value: number) => void
}

export const Slider = ({
  id = _.uniqueId(),
  orientation,
  value,
  min,
  max,
  onChange
}: SliderProps) => {
  const theme = useContext(ThemeContext)

  const styles: RangeProps = {
    trackColor: theme.colors.sliderBackground,
    thumbColor: theme.colors.primary,
    transition: transitionToCss(theme.transitions.short)
  }

  return (
    <Range
      id={id}
      value={value}
      min={min}
      max={max}
      onChange={(e) => onChange?.call(e.target.value)}
      {...styles}
    />
  )
}
