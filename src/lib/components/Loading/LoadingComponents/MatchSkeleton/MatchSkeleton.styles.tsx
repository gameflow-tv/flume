import styled from 'styled-components'
import { loading } from '../Animation/Shimmer.styles'

export const MatchWrapper = styled.div`
  min-width: 798px;
  height: 57px;
  border-radius: 4px;
  background: #36393b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 8px;
  position: relative;
  box-shadow: 0 4px 0.5rem rgba(0, 0, 0, 0.2);
`

export const TeamName = styled.p`
  width: 98px;
  height: 17px;
  border-radius: 4px;
  background: #434647;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #434647 0%,
      rgba(255, 255, 255, 0.05) 20%,
      #434647 40%,
      #434647 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    ${loading()};
  }
`

export const ScoreBox = styled.div`
  width: 54px;
  height: 26px;
  border-radius: 4px;
  background: #434647;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #434647 0%,
      rgba(255, 255, 255, 0.05) 20%,
      #434647 40%,
      #434647 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    ${loading()};
  }
`
