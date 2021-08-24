import styled from 'styled-components'

export type StyledAspectRatioProps = {
  aspectRatio?: number
  minWidth?: string
}

export const StyledAspectRatio = styled.div<StyledAspectRatioProps>`
  position: relative;
  min-width: ${(props) => props.minWidth};
  &:before {
    width: 100%;
    display: block;
    padding-top: ${(props) => props.aspectRatio}%;
    height: 0;
    content: '';
  }
`

export const ChildContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
