import styled from 'styled-components'
import { loading } from '../Animation/Shimmer.styles'

export const BannerWrapper = styled.div`
  min-width: 798px;
  max-height: 80px;
  border-radius: 4px;
  background: #36393b;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
  box-shadow: 0 4px 0.5rem rgba(0,0,0,0.2);
`

export const Rectangle = styled.div`
  width: 114px;
  height: 64px;
  border-radius: 4px;
  background: #434647;
  margin: 0 10px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #434647 0%, rgba(255, 255, 255, 0.05) 20%, #434647 40%, #434647 100%);
    background-repeat: no-repeat;
    background-size: 450px 400px;
    ${loading()};
  }
`

export const TeamName = styled.h1`
  width: 182px;
  height: 18px;
  border-radius: 4px;
  background: #434647;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #434647 0%, rgba(255, 255, 255, 0.05) 20%, #434647 40%, #434647 100%);
    background-repeat: no-repeat;
    background-size: 450px 400px;
    ${loading()};
  }
`

export const Description = styled.p`
  width: 98px;
  height: 17px;
  border-radius: 4px;
  background: #434647;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #434647 0%, rgba(255, 255, 255, 0.05) 20%, #434647 40%, #434647 100%);
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
  gap: 8px;

`

export const MatchState = styled.p`
  width: 71px;
  min-height: 16px;
  border-radius: 4px;
  background: #434647;
  margin-right: 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #434647 0%, rgba(255, 255, 255, 0.05) 20%, #434647 40%, #434647 100%);
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
`
