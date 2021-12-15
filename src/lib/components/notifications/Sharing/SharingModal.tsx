import React, { useState } from 'react'
import { Icon } from '../../icons'
import { IconButton } from '../../buttons'
import { Input } from '../../inputs'
import { useTheme } from '../../../hooks'
import { Modal } from '../Modal'
import {
  ButtonsWrapper,
  SharingBody,
  SharingButton,
  SharingHeader,
  SocialButton,
  SocialLink,
  SocialWrapper
} from './SharingModal.styles'

export type FacebookSharingProps = {
  app_id: string | number
  display: 'page' | 'iframe' | 'popup' | 'touch'
  hashtag?: string[]
  quote?: string
}

export type TwitterSharingProps = {
  hashtags?: string[]
  text?: string
  via?: string
  related: string[2]
}

export type SharingModalProps = {
  link?: string
  title?: string
  description?: string
  show?: boolean
  onClose?: (value?: boolean) => void
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
  const [linkCopied, setLinkCopied] = useState(false)
  const theme = useTheme()

  const sharingData = {
    link: props.link || document?.location?.href || '',
    title: props.title || document?.title || 'Gameflow',
    description:
      props.description ||
      document?.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
      'Gameflow'
  }

  const twitterData = {
    ...props.twitter,
    text: props.twitter?.text || sharingData.description
  }

  const handleCopy = () => {
    navigator?.clipboard?.writeText(sharingData.link)
    setLinkCopied(true)
  }

  const handleShareAPI = () => {
    const shareData = {
      title: sharingData.title,
      text: sharingData.description,
      url: sharingData.link
    }
    navigator?.share?.(shareData)
  }

  return (
    <Modal show={props.show} onClose={props.onClose} size="546px">
      <SharingHeader>Share link</SharingHeader>
      <SharingBody>
        <Input type="text" value={sharingData.link} disabled />
        <ButtonsWrapper>
          <div>
            <SharingButton variant="primary" size="medium" onClick={handleCopy}>
              <>
                {linkCopied ? 'COPIED' : 'COPY LINK'}&nbsp;
                <Icon icon={linkCopied ? 'check_filled' : 'link'} color={theme.colors.onPrimary} />
              </>
            </SharingButton>
          </div>
          <SocialWrapper>
            {navigator.share && (
              <SocialButton
                icon="share"
                size="large"
                onClick={() => handleShareAPI()}
                fontAwesome={false}
              />
            )}
            <SocialLink
              href={getFBShareLink(props.facebook, sharingData.link)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="large" icon="facebook" fontAwesome={false} />
            </SocialLink>
            <SocialLink
              href={getTwitterShareLink(twitterData, sharingData.link)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="large" icon="twitter" fontAwesome={false} />
            </SocialLink>
          </SocialWrapper>
        </ButtonsWrapper>
      </SharingBody>
    </Modal>
  )
}
