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

