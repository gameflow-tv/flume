import _ from 'lodash'
import React, { ChangeEventHandler, ReactNode } from 'react'
import { Range, RangeLabel, RangeWrap, SliderLabel, Wrapper } from './Slider.styles'
import { useAmbiance, useTheme } from '../../hooks'
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
  const ambiance = useAmbiance()

  return (
    <Wrapper gap={theme.spacing.xsmall} labelPosition={labelPosition}>
      <SliderLabel
        htmlFor={id}
        margin={theme.spacing.xxsmall}
        typography={theme.typography.header5}
        color={theme.colors.header}
      >
        {label}
      </SliderLabel>
      <RangeWrap labelPosition={labelPosition}>
        <RangeLabel color={theme.colors.body}>{minLabel}</RangeLabel>
        <Range
          id={id}
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange && onChange(e)}
          step={step}
          borderRadius={theme.shapes.borders.full}
          trackColor={ambiance.color}
          thumbColor={theme.colors.primary}
          transition={theme.transitions.short}
        />
        <RangeLabel color={theme.colors.body}>{maxLabel}</RangeLabel>
      </RangeWrap>
    </Wrapper>
  )
}
