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
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const AmbientBox = ({
  children,
  color,
  elevation
}: {
  children?: ReactNode
  color?: string
  elevation?: number
}) => {
  return (
    <Ambiance color={color} elevation={elevation}>
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
    <Ambiance>
      <AmbianceContext.Consumer>
        {(ambiance) => {
          return (
            <ColorBox color={ambiance.color}>
              <p>Elevation: {ambiance.elevation}</p>
              <AmbientBox>
                <AmbientBox>
                  <AmbientBox>
                    <AmbientBox>
                      <AmbientBox>
                        <Ambiance elevation={0}>
                          <AmbianceContext.Consumer>
                            {(ambiance) => {
                              return (
                                <ColorBox color={ambiance.color}>
                                  <p>Elevation (forced): {ambiance.elevation}</p>
                                </ColorBox>
                              )
                            }}
                          </AmbianceContext.Consumer>
                        </Ambiance>
                      </AmbientBox>
                    </AmbientBox>
                  </AmbientBox>
                </AmbientBox>
              </AmbientBox>
            </ColorBox>
          )
        }}
      </AmbianceContext.Consumer>
    </Ambiance>
  )
}

export const MixedSource = () => {
  return (
    <Ambiance>
      <AmbianceContext.Consumer>
        {(ambiance) => {
          return (
            <ColorBox color={ambiance.color}>
              <p>Elevation: {ambiance.elevation}</p>
              <AmbientBox>
                <AmbientBox color="#ff0000" elevation={0}>
                  <AmbientBox>
                    <AmbientBox>
                      <AmbientBox>
                        <Ambiance elevation={0}>
                          <AmbianceContext.Consumer>
                            {(ambiance) => {
                              return (
                                <ColorBox color={ambiance.color}>
                                  <p>Elevation (forced): {ambiance.elevation}</p>
                                </ColorBox>
                              )
                            }}
                          </AmbianceContext.Consumer>
                        </Ambiance>
                      </AmbientBox>
                    </AmbientBox>
                  </AmbientBox>
                </AmbientBox>
              </AmbientBox>
            </ColorBox>
          )
        }}
      </AmbianceContext.Consumer>
    </Ambiance>
  )
}
