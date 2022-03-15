import React, { Fragment, ReactNode } from 'react'
import { MarqueeGlobalStyle, MarqueeStyles, Wrapper } from './Marquee.styles'

export type MarqueeProps = MarqueeStyles & {
  children: ReactNode
}

export const Marquee = (props: MarqueeProps) => {
  return (
    <Fragment>
      <MarqueeGlobalStyle {...props} />
      <Wrapper>{props.children}</Wrapper>
    </Fragment>
  )
}
