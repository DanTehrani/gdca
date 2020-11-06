import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Page from '../../components/Page'
import Text from '../../components/Text'
import GreenButton from './GreenButton'
import Video from './Video'
import NewsPickUps from './NewsPickUps'
import Divider from './Divider'
import topImg from './top-img.png'
import vidBackground from './video-background.png'


const StyledPage = styled(Page)`
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    font-size: 13px;
  `}
`

const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

const FooterContainer = styled.div`
  margin-top: 2.5em;
`

const TopImage = styled.img
`
  width: 100%;
  height: auto;
`

const VideoContainer = styled.div
`
  margin: 40px 0px;
`


function GDCARecap () {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TopImage src={topImg}/>
      <GreenButton text='メディア向け' />
      <VideoContainer>
        <Video />
      </VideoContainer>
      <NewsPickUps />
      <Divider />
      <Footer />
    </StyledPage>
  )
}

export default GDCARecap
