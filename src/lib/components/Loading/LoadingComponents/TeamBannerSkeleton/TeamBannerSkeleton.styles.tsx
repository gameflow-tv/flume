import styled from 'styled-components'
import { Theme } from '../../../../theme'
import { loading } from '../Animation/Shimmer.styles'

export const BannerWrapper = styled.div<{ theme: Theme }>`
  min-width: 798px;
  max-height: 80px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.onBackground};
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.xsmall};
  position: relative;
  box-shadow: ${(props) => props.theme.shadows.small};
  overflow: hidden;
`

export const Rectangle = styled.div<{ theme: Theme }>`
  width: 114px;
  height: 64px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.toggle};
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

export const TeamName = styled.h1<{ theme: Theme }>`
  width: 182px;
  height: 18px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.toggle};
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

export const Description = styled.p<{ theme: Theme }>`
  width: 98px;
  height: 17px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.toggle};
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
export const DescriptionWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  height: 100%;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.xsmall};
  overflow: hidden;
`

export const MatchState = styled.p<{ theme: Theme }>`
  width: 71px;
  min-height: 16px;
  border-radius: ${(props) => props.theme.spacing.xxsmall};
  background: ${(props) => props.theme.colors.toggle};
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

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  overflow: hidden;
`
