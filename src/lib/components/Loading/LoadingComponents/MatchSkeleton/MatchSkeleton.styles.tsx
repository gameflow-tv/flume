import styled from 'styled-components'
import { Theme } from '../../../../theme'
import { loading } from '../Animation/Shimmer.styles'

export const MatchWrapper = styled.div<{ theme: Theme }>`
  min-width: 798px;
  height: 57px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.onBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.xsmall};
  position: relative;
  box-shadow: ${(props) => props.theme.shadows.small};
  overflow: hidden;
`

export const TeamName = styled.p<{ theme: Theme }>`
  width: 98px;
  height: 17px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.toggle};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.toggle} 0%,
      rgba(255, 255, 255, 0.05) 20%,
      ${(props) => props.theme.colors.toggle} 40%,
      ${(props) => props.theme.colors.toggle} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    ${loading()};
  }
`

export const ScoreBox = styled.div<{ theme: Theme }>`
  width: 54px;
  height: 26px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.toggle};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.toggle} 0%,
      rgba(255, 255, 255, 0.05) 20%,
      ${(props) => props.theme.colors.toggle} 40%,
      ${(props) => props.theme.colors.toggle} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    ${loading()};
  }
`
