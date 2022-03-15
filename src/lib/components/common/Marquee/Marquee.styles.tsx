import styled, { createGlobalStyle, keyframes } from 'styled-components'

export type MarqueeStyles = {
  duration: number
  offset?: string
}

export const MarqueeGlobalStyle = createGlobalStyle<MarqueeStyles>`
:root{
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  --duration: ${(props) => props.duration}s;
}
`

const slide = (props) => {
  return keyframes`
    0% {
      transform: translateX(var(--move-initial));
    }

    100% {
      transform: translateX(var(--move-final));
    }
  `
}

export const Wrapper = styled.div`
  box-sizing: border-box;
  user-select: none;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transform: translateX(var(--move-initial));

  & > * {
    margin: 0;
    padding: 0;
    width: max-content;
    animation: ${slide} var(--duration) linear infinite;
  }
`
