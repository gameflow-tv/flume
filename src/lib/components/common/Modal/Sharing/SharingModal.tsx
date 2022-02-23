import React, { useState } from 'react'
import { Icon } from '../../../icons'
import { Button, IconButton } from '../../../buttons'
import { useAmbiance, useTheme } from '../../../../hooks'
import { Modal, ModalProps } from '../Modal'
import {
  ButtonsWrapper,
  SharingBody,
  SharingHeader,
  SocialButton,
  SocialLink,
  SocialWrapper
} from './SharingModal.styles'
import { getLuminance } from '../../../../helpers'
import { Input } from '../../../inputs'
import { Ambiance, AmbianceContext } from '../../../../providers/AmbianceProvider'

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

export type SharingModalProps = ModalProps & {
  link?: string
  title?: string
  description?: string
  show?: boolean
  onClose?: (value?: boolean) => void
  facebook?: FacebookSharingProps
  twitter?: TwitterSharingProps
  story?: boolean
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
  const ambiance = useAmbiance()

  const sharingData = {
    link: props.story ? 'https://flume.gameflow.tv' : props.link || document?.location?.href || '',
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

    const checkError = (e: Error) => {
      if (e.toString().includes('AbortError')) {
        console.log('Error while sharing')
      }
    }

    navigator?.share?.(shareData).catch(checkError)
  }

  return (
    <Modal size="546px" {...props} backgroundColor={ambiance.color}>
      <Ambiance>
        <AmbianceContext.Consumer>
          {(ambiance) => (
            <>
              <SharingHeader typography={theme.typography.header2}>Share link</SharingHeader>
              <SharingBody>
                <Input
                  type="text"
                  value={sharingData.link}
                  inputStyles={{ input: { disabled: { backgroundColor: ambiance.color } } }}
                  disabled
                />
                <ButtonsWrapper>
                  <div>
                    <Button variant="primary" size="medium" onClick={handleCopy}>
                      <React.Fragment>
                        {linkCopied ? 'COPIED' : 'COPY LINK'}&nbsp;
                        <Icon
                          icon={linkCopied ? 'check_circle_filled' : 'link'}
                          color={theme.colors.onPrimary}
                        />
                      </React.Fragment>
                    </Button>
                  </div>
                  <SocialWrapper>
                    {navigator.share && (
                      <SocialButton
                        icon="share"
                        size="large"
                        onClick={() => handleShareAPI()}
                        background={ambiance.color}
                      />
                    )}
                    <SocialLink
                      href={getFBShareLink(props.facebook, sharingData.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton size="large" icon="facebook" background={ambiance.color} />
                    </SocialLink>
                    <SocialLink
                      href={getTwitterShareLink(twitterData, sharingData.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton size="large" icon="twitter" background={ambiance.color} />
                    </SocialLink>
                  </SocialWrapper>
                </ButtonsWrapper>
              </SharingBody>
            </>
          )}
        </AmbianceContext.Consumer>
      </Ambiance>
    </Modal>
  )
}
