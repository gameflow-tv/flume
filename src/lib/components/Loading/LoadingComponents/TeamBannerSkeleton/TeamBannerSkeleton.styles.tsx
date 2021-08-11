import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { loading } from '../Animation/Shimmer.styles'

export const BannerWrapper = styled.div`
  min-width: 798px;
  max-height: 80px;
  border-radius: ${theme.spacing.xxsmall};
  background: ${theme.colors.onBackground};
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.xsmall};
  position: relative;
  box-shadow: ${theme.shadows.small};
  overflow: hidden;
`

export const Rectangle = styled.div`
  width: 114px;
  height: 64px;
  border-radius: ${theme.spacing.xxsmall};
  background: ${theme.colors.toggle};
  margin: 0 10px;
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

export const TeamName = styled.h1`
  width: 182px;
  height: 18px;
  border-radius: ${theme.spacing.xxsmall};
  background: ${theme.colors.toggle};
  margin: 0;
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

export const Description = styled.p`
  width: 98px;
  height: 17px;
  border-radius: ${theme.spacing.xxsmall};
  background: ${theme.colors.toggle};
  margin: 0;
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
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  height: 100%;
  justify-content: center;
  gap: ${theme.spacing.xsmall};
  overflow: hidden;
`

export const MatchState = styled.p`
  width: 71px;
  min-height: 16px;
  border-radius: ${theme.spacing.xxsmall};
  background: ${theme.colors.toggle};
  margin-right: 12px;
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

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  overflow: hidden;
`
