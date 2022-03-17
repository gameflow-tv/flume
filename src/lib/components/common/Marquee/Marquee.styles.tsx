import styled, { createGlobalStyle, keyframes } from 'styled-components'

export type MarqueeStyles = {
  duration: number
  width?: string
  contentGap?: string
  offset?: string
}

export const MarqueeGlobalStyle = createGlobalStyle<MarqueeStyles>`
  :root{
    --duration: ${(props) => props.duration}s;
  }
`

const slideMainWhenStart = (props) => {
  return keyframes`
    0% {
      transform: 0px;
    }

    100% {
      transform: translateX(-100%);
    }
  `
}

const slideMainForever = (props) => {
  return keyframes`
    0% {
      transform:  translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
  `
}

const slideFakeForever = (props) => {
  return keyframes`
    0% {
      transform:  translateX(0);
    }

    100% {
      transform: translateX(-200%);
    }
  `
}

export const Track = styled.div<MarqueeStyles>`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;

  * {
    margin: 0;
    padding: 0;
  }
`

export const Roller = styled.div`
  display: block;
  width: max-content;
  min-width: 200%;
`

export const MainContent = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0 10px;
  width: fit-content;
  min-width: 50%;
  animation-name: ${slideMainWhenStart}, ${slideMainForever};
  animation-duration: var(--duration), calc(var(--duration) * 2);
  animation-delay: 0s, var(--duration);
  animation-timing-function: linear, linear;
  animation-iteration-count: 1, infinite;
`

export const FakeContent = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0 10px;
  width: fit-content;
  min-width: 50%;
  animation-name: ${slideFakeForever};
  animation-duration: calc(var(--duration) * 2);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: 0;
`
