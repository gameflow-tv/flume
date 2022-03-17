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
  slide?: boolean
}

export const Marquee = (props: MarqueeProps) => {
  const { slide = true } = props

  return (
    <Fragment>
      <MarqueeGlobalStyle {...props} />
      <Track {...props}>
        <Roller>
          <MainContent className={slide && 'slide'}>{props.children}</MainContent>
          <FakeContent className={slide && 'slide'}>{props.children}</FakeContent>
        </Roller>
      </Track>
    </Fragment>
  )
}
