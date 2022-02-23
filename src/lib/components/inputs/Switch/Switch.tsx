import _ from 'lodash'
import React from 'react'
import { LabelPosition } from '../'
import { useAmbiance, useTheme } from '../../../hooks'
import { transitionToCss } from '../../../theme'
import {
  SwitchKnob,
  SwitchKnobProps,
  SwitchLabel,
  SwitchLabelProps,
  SwitchTrack,
  SwitchTrackProps,
  TrackContainer,
  Wrapper,
  WrapperProps
} from './Switch.styles'

export type SwitchProps = {
  id?: string
  label?: string
  checked?: boolean
  onChange: (checked: boolean) => void
  labelPosition?: LabelPosition
}

export const Switch = ({
  id = _.uniqueId(),
  checked,
  onChange,
  label,
  labelPosition
}: SwitchProps) => {
  const theme = useTheme()
  const ambiance = useAmbiance()

  const styles: SwitchKnobProps & SwitchTrackProps & WrapperProps & SwitchLabelProps = {
    backgroundColor: ambiance.color,
    foregroundColor: theme.colors.header,
    checkedColor: theme.colors.primary,
    transition: transitionToCss(theme.transitions.short),
    knobRadius: theme.shapes.borders.full,
    trackRadius: theme.shapes.borders.pill,
    trackShadow: theme.shadows.xsmall,
    knobShadow: theme.shadows.xsmall,
    gap: theme.spacing.xsmall,
    labelTypography: theme.typography.header5,
    labelColor: theme.colors.body,
    labelPosition,
    checked
  }

  return (
    <Wrapper {...styles}>
      <TrackContainer>
        <SwitchTrack id={id} onChange={(e) => onChange.call(e.target.checked)} {...styles} />
        <SwitchKnob {...styles} />
      </TrackContainer>
      <SwitchLabel htmlFor={id} {...styles}>
        {label}
      </SwitchLabel>
    </Wrapper>
  )
}
