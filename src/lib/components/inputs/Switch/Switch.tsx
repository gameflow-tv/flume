import _ from 'lodash'
import React from 'react'
import { useTheme } from '../../../hooks'
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

export type LabelPosition = 'left' | 'right' | 'top' | 'bottom'

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

  const styles: SwitchKnobProps & SwitchTrackProps & WrapperProps & SwitchLabelProps = {
    backgroundColor: theme.colors.toggle,
    foregroundColor: theme.colors.onToggle,
    checkedColor: theme.colors.primary,
    transition: transitionToCss(theme.transitions.short),
    knobRadius: theme.shapes.borders.full,
    trackRadius: theme.shapes.borders.pill,
    trackShadow: theme.shadows.xsmall,
    knobShadow: theme.shadows.xsmall,
    gap: theme.spacing.xsmall,
    labelTypography: theme.typography.header5,
    labelColor: theme.colors.onTextField,
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
