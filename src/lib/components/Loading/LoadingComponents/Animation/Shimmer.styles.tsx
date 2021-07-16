import styled, { css, keyframes } from 'styled-components'

export const loading = () => {
  const animation = keyframes`
    0% {
      background-position: -450px 0;
    }
    100% {
      background-position: 450px 0;
    }
  `
  return css`
    animation: ${animation} 2s ease infinite;
  `
}

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Slide = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`
