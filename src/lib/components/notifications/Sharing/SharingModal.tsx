import React from 'react'
import { Button, Icon, IconButton, Input } from '../..'
import { useTheme } from '../../../hooks'
import { Modal } from '../Modal'
import { ButtonsWrapper, SharingBody, SharingHeader, SocialLink } from './SharingModal.styles'

export type FacebookSharingProps = {
  app_id: string | number
  display: 'page' | 'iframe' | 'popup' | 'touch'
  hashtag?: string[]
  quote?: string
}

export type TwitterSharingProps = {
  hashtags?: string[]
  text: string
  via?: string
  related: string[2]
}

export type SharingModalProps = {
  link?: string
  facebook?: FacebookSharingProps
  twitter?: TwitterSharingProps
}

const getFBShareLink = (sharingData: FacebookSharingProps, link: string) => {
  const params = { ...sharingData, href: link, redirect_uri: link }

  const uriParams = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')

  return `https://www.facebook.com/dialog/share?${uriParams}`
}

const getTwitterShareLink = (sharingData: TwitterSharingProps, link: string) => {
  const params = {
    ...sharingData,
    url: link,
    original_referer: document?.location?.href,
    ref_src: document?.location?.href
  }

  const uriParams = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')

  return `https://twitter.com/intent/tweet?${uriParams}`
}

export const SharingModal = (props: SharingModalProps) => {
  const theme = useTheme()
  const link = props.link || document?.location?.href || ''

  const handleCopy = (e) => {
    navigator?.clipboard?.writeText(link)
  }

  return (
    <Modal show={true} size="546px">
      <SharingHeader>Share link</SharingHeader>
      <SharingBody>
        <Input type="text" value={link} disabled />
        <ButtonsWrapper>
          <div>
            <Button variant="primary" size="medium" onClick={handleCopy}>
              COPY LINK &nbsp; <Icon icon="arrow_right" color={theme.colors.onPrimary} />
            </Button>
          </div>
          <div>
            <SocialLink href={getFBShareLink(props.facebook, link)} rel="noopener noreferrer">
              <IconButton size="large">
                <Icon icon="facebook" size="large" />
              </IconButton>
            </SocialLink>
            <SocialLink
              href={getTwitterShareLink(props.twitter, link)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="large">
                <Icon icon="twitter" size="large" />
              </IconButton>
            </SocialLink>
          </div>
        </ButtonsWrapper>
      </SharingBody>
    </Modal>
  )
}
