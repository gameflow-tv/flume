import React, { Fragment, ReactNode } from 'react'
import {
  FakeContent,
  MainContent,
  MarqueeGlobalStyle,
  MarqueeStyles,
  Roller,
  Track
} from './Marquee.styles'

export type MarqueeProps = MarqueeStyles & {
  children: ReactNode
}

export const Marquee = (props: MarqueeProps) => {
  return (
    <Fragment>
      <MarqueeGlobalStyle {...props} />
      <Track {...props}>
        <Roller>
          <MainContent>{props.children}</MainContent>
          <FakeContent>{props.children}</FakeContent>
        </Roller>
      </Track>
    </Fragment>
  )
}
