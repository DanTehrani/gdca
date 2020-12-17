import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import media from 'styled-media-query'
import CookieConsentBanner from '../CookieConsentBanner'
import MobileShareBar from '../MobileShareBar'
import Sidebar from '../Sidebar'

const StyledPage = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: ${props => props.maxWidth || '1200px'};
  padding-top: 30px;
  ${media.lessThan('large')`
    max-width: 950px;
  `}
  ${media.lessThan('medium')`
    max-width: 700px;
  `}
  ${media.lessThan('small')`
    max-width: 330px;
  `}
`

function Page (props) {
  const isBelowThreshold = useMediaQuery({ query: '(max-width: 1425px)' })
  return (
    <StyledPage {...props}>
      {props.children}
      <CookieConsentBanner />
    </StyledPage>
  )
}

export default Page
