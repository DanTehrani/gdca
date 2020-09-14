import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import PageGDCA from '../../components/PageGDCA'
import Text from '../../components/Text'
import DownloadButton from '../../components/GDCA/DownloadButton'
import Box from './Box'
import petitionQR from './images/fffj-petition-qr-a.png'
import flyer from './images/flyer.png'
import icons from './images/icons.png'
import sns from './images/sns.png'
import frames from './images/frames.png'
import pressRelease from './images/press-release.png'

const DownloadButtonContainer = styled.div
`
  margin: 40px 0;
  ${media.greaterThan('medium')`
    margin: 80px 0;
  `};
  text-align: center;
`

const TextContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  margin: 0 20px;
  ${media.greaterThan('medium')`
    margin: 0 80px;
  `};
  text-align: center;
`

const BoxesContainer = styled.div
`
  padding: 2em 0;
  background-color: ${props => props.theme.beige};
`

const Title = styled(Text)
`
  display: block;
  font-size: 1.8em;
  text-align: center;
  margin: 1em 0;
  padding: 0 1em;
`

const Divider = styled.hr
`
  color: ${props => props.theme.black};
  border-bottom: solid 1px;
  width: 70%;
`

function GDCASharePack (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <PageGDCA maxWidth='1120px'>
      <TextContainer>
      以下よりダウンロードできるシェアパック（広報素材）には、 <br />
      世界気候アクション0925（GDCA）の広報に使えるチラシや画像が詰まってます！
      </TextContainer>
      <DownloadButtonContainer>
        <DownloadButton href='/gdca-sharepack.zip' text='広報素材をダウンロード' />
      </DownloadButtonContainer>
      <BoxesContainer>
        <Title bold>広報素材一覧<br/>シェアパックに入っているもの</Title>
        <Box
          title='署名QRコード'
          text='印刷してプラカードに貼り、署名を呼びかけよう！リンクの貼れないインスタでも、URLがすぐ見つからなくても、これでOK！'
          imgSrc={petitionQR}
        />
        <Box
          title='チラシ（フライヤー）'
          text='裏面下部に各自企画の詳細(日時場所)を書き込んで配布・掲示！'
          imgSrc={flyer}
          imgWidth='250px'
        />
        <Box
          title='アイコン'
          text='SNSの投稿に散りばめて、日本での連帯感を醸し出す！'
          imgSrc={icons}
          imgWidth='300px'
        />
        <Box
          title='アイコンフレーム'
          text='SNSのアイコンに加えると、24時間宣伝ができちゃう！'
          imgSrc={frames}
          imgWidth='300px'
        />
        <Box
          title='SNS用画像'
          text='そのまま投稿しても良し、数字を加えてカウントダウンするも良し！'
          imgSrc={sns}
          imgWidth='250px'
        />
        <Box
          title='プレスリリース'
          text='赤字部分を各企画Ver.に修正してメディアにも告知しよう！'
          imgSrc={pressRelease}
          imgWidth='250px'
        />
      </BoxesContainer>
      
    </PageGDCA>
  )
}

export default GDCASharePack
