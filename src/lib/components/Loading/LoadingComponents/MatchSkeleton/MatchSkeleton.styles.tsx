import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { loading } from '../Animation/Shimmer.styles'

export const MatchWrapper = styled.div`
  min-width: 798px;
  height: 57px;
  border-radius: ${theme.spacing.xxsmall};
  background: ${theme.colors.onBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.xsmall};
  position: relative;
  box-shadow: ${theme.shadows.small};
  overflow: hidden;
`

export const TeamName = styled.p`
  width: 98px;
  height: 17px;
  border-radius: ${theme.spacing.xxsmall};
  background: ${theme.colors.toggle};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${theme.colors.toggle} 0%,
      rgba(255, 255, 255, 0.05) 20%,
      ${theme.colors.toggle} 40%,
      ${theme.colors.toggle} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    ${loading()};
  }
`

export const ScoreBox = styled.div`
  width: 54px;
  height: 26px;
  border-radius: ${theme.spacing.xxsmall};
  background: ${theme.colors.toggle};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${theme.colors.toggle} 0%,
      rgba(255, 255, 255, 0.05) 20%,
      ${theme.colors.toggle} 40%,
      ${theme.colors.toggle} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    ${loading()};
  }
`
