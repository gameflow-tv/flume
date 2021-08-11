import styled from 'styled-components'
import { TypographyStyle, typographyToCss } from '../../../theme'
import { LabelPosition } from './Switch'

export type WrapperProps = {
  gap: string
  labelPosition?: LabelPosition
}

const flexDirFromPosition = (position?: LabelPosition): string => {
  switch (position) {
    case 'top':
      return 'column-reverse'
    case 'right':
      return 'row'
    case 'bottom':
      return 'column'
    case 'left':
    default:
      return 'row-reverse'
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

export const TrackContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 20px;
`

export type SwitchTrackProps = {
  trackShadow: string
  checkedColor: string
}

export const SwitchTrack = styled.input.attrs({
  type: 'checkbox'
})<SwitchTrackProps>`
  display: none;

  & + span {
    box-shadow: ${(props) => props.trackShadow};
  }

  &:checked + span {
    background-color: ${(props) => props.checkedColor};
  }

  &:focus + span {
    box-shadow: 0 0 1px ${(props) => props.checkedColor};
  }
`

export type SwitchKnobProps = {
  backgroundColor: string
  foregroundColor: string
  transition: string
  knobRadius: string
  trackRadius: string
  checked?: boolean
  knobShadow: string
}

export const SwitchKnob = styled.span<SwitchKnobProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: ${(props) => props.transition};

  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.trackRadius};

  &:before {
    position: absolute;
    content: '';
    left: 1px;
    bottom: 1px;

    transition: ${(props) => props.transition};

    height: 18px;
    width: 18px;
    background-color: ${(props) => props.foregroundColor};
    border-radius: ${(props) => props.knobRadius};
    box-shadow: ${(props) => props.knobShadow};

    input:checked + & {
      transform: translateX(22px);
    }
`

export type SwitchLabelProps = {
  labelTypography?: TypographyStyle
  labelColor?: string
}

export const SwitchLabel = styled.label<SwitchLabelProps>`
  color: ${(props) => props.labelColor};
  ${(props) => typographyToCss(props.labelTypography)}
`
