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
import BlueTitle from './BlueTitle'
import NewsPickUps from './NewsPickUps'
import Divider from './Divider'
import JPPicksCollage from './JPPicksCollage'
import ActionsList from '../../components/GDAApplicationForm/ActionsList'
import ChaptersSocials from '../../components/Top/ChaptersSocials'
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

const Spacer = styled.div
`
  padding: 20px;
`

const ChapersSocialsContainer = styled.div
`
  width: 100%;
  margin-top: 1em;
  display: flex;
  justify-content: center;
`


function GDCARecap () {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TopImage src={topImg}/>
      <GreenButton text='メディア向け' href='https://fridaysforfuture.jp/press-release-gdca'/>
      <VideoContainer>
        <Video />
      </VideoContainer>
      <NewsPickUps />
      <Divider />
      <JPPicksCollage />
      <Spacer />
      <Spacer />
      <GreenButton text='世界の写真' href='https://350org.widencollective.com/portals/iucshiv3/GlobalClimateStrikesMultimediaHub'/>
      <Spacer />
      <Divider />
      <Spacer />
      <Spacer />
      <BlueTitle ceterText text='アクションをとりつづけよう' />
      <Spacer />
      <BlueTitle ceterText withShoes text='日本のFFFと繋がる' />
      <ChapersSocialsContainer>
        <ChaptersSocials noTitle />
      </ChapersSocialsContainer>
      <Spacer />
      <BlueTitle ceterText withShoes text='当日の企画一覧' />
      <ActionsList />
      <Footer />
    </StyledPage>
  )
}

export default GDCARecap
