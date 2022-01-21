import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Ambiance, AmbianceContext } from './AmbianceProvider'

export default {
  title: 'Ambiance/Sample',
  component: Ambiance
}

const ColorBox = styled.div<{ color?: string; size?: string }>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: 8px 16px;
`

const AmbientBox = ({ children }: { children?: ReactNode }) => {
  return (
    <Ambiance>
      <AmbianceContext.Consumer>
        {(ambiance) => {
          return (
            <ColorBox color={ambiance.color}>
              <p>Elevation: {ambiance.elevation}</p>
              {children}
            </ColorBox>
          )
        }}
      </AmbianceContext.Consumer>
    </Ambiance>
  )
}

export const Sample = () => {
  return (
    <AmbianceContext.Consumer>
      {(ambiance) => {
        return (
          <ColorBox color={ambiance.color}>
            <p>Elevation: {ambiance.elevation}</p>
            <AmbientBox>
              <AmbientBox>
                <AmbientBox>
                  <AmbientBox>
                    <AmbientBox></AmbientBox>
                  </AmbientBox>
                </AmbientBox>
              </AmbientBox>
            </AmbientBox>
          </ColorBox>
        )
      }}
    </AmbianceContext.Consumer>
  )
}
