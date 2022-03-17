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
  autoSlide?: boolean
  slide?: boolean
}

export const Marquee = (props: MarqueeProps) => {
  const { autoSlide = true, slide = false } = props
  const dispatchSlide = (autoSlide || slide) ?? true

  return (
    <Fragment>
      <MarqueeGlobalStyle {...props} />
      <Track {...props}>
        <Roller>
          <MainContent className={dispatchSlide && 'slide'}>{props.children}</MainContent>
          <FakeContent className={dispatchSlide && 'slide'}>{props.children}</FakeContent>
        </Roller>
      </Track>
    </Fragment>
  )
}
