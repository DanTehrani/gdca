import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import GDAHeader from '../../../components/GDAHeader'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'
import { ArrowDown } from '@styled-icons/icomoon/ArrowDown'

import sampleInsta from './sample-insta.jpg'
import sampleTwitter from './sample-twitter.png'

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

const TitleContainer = styled.div`
  text-align: center;
  margin: 2em 0;
`

const Title = styled(Text)`
  display: block;
  color: #000;
  font-size: 2em
`

const Section = styled.div`
  margin: 2em 0;
`

const Body = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 300;
  font-style: normal;
  padding: 0 12em;
  margin-top: 5em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
  line-height: 1.9;
`

const TextLink = styled(Text)`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  font-weight: bold;
`

const LinkExternal = styled.a
`
  color: ${props => props.theme.blue};
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`

const TextSmall = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1em;
`

const TextSmallUnderline = styled(TextSmall)`
  text-decoration: underline;
`

const TextSmallRed = styled(TextLight)`
  color: ${props => props.theme.red};
`

const TextMedium = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1.1em;
`

const Heading1 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.4em;
  font-weight: bold;
  text-align: center;
`

const Heading1Green = styled(Heading1)
`
  color: ${props => props.theme.green};
  text-align: center;
`



const Heading2 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1.1em;
  font-weight: bold;
`

const Heading3 = styled(Text)
`
  display: block;
  color: #000;
  font-size: 1em;
  font-weight: bold;
`

const Heading2Green = styled(Text)
`
  display: block;
  color: ${props => props.theme.green};
  font-size: 1.1em;
  font-weight: bold;
`

const ArrowDownContainer = styled.div
`
  text-align: center;
  margin: 2em 0;
`

const StyledArrowDown = styled(ArrowDown)
`
  width: 70px;
  color: ${props => props.theme.green};
`

const TwitterImageContainer = styled.div
`
  width: 60%;
`

const TwitterImage = styled.img
`
width: 100%;
`

const InstaImageContainer = styled.div
`
  width: 35%;
`

const InstaImage = styled.img
`
  width: 100%;
`

const SampleImagesContainer = styled.div
`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

function GDAParticipantInfo () {
  return (
    <StyledPage maxWidth='1120px'>
      <GDAHeader />
      <Body>
        <TitleContainer>
          <Title>GDCA参加者の心得</Title>
          <br />
          <Heading1>１、靴とプラカードを持ってくるべし！</Heading1>
          <Heading1>２、周りを巻き込んでアクションすべし！</Heading1>
          <Heading1>３、三密を避けてアクションすべし！</Heading1>
        </TitleContainer>
        <Heading1Green>手順</Heading1Green>
        <hr />
          <ol>
          <li><Heading2>見つけよう！</Heading2></li>
          <ul>
          <li>FFF JapanのHPの<HashLink smooth to='gda-application-form#actions-list'><TextLink>企画一覧</TextLink></HashLink>から自分の地域のアクションを見つけよう！</li>
          <li>自分の地域近くに開催場所がない場合はSNS発信しよう！（発信の方法は下をチェック）</li>
          </ul>
        
        <Section>
          <li><Heading2>検索して、要件チェック！</Heading2></li>
          <ul>
          <li><HashLink smooth to='gda-application-form#actions-list'><TextLink>企画一覧</TextLink></HashLink>のページから各地域のイベントページへ</li>
          <li>各地域の企画内容と要件をチェックしてみよう！</li>
          <ul>
          <li>注：事前申し込みが必要な地域もあるので要チェック！</li>
            </ul>
          </ul>
        </Section>

        <Section>
          <li><Heading2>イベントに参加！</Heading2></li>
          <ul>
          <li>実際にイベントに参加しよう！忘れ物はないかな？（下の持ち物をチェック！）</li>
          <li>開催場所にあるQRコードからFFFが行っている署名に参加しよう！</li>
          </ul>
        </Section>

        <Section>
          <li><Heading2>後片付けも忘れずに！</Heading2></li>
          <ul>
          <li>靴やプラカードを回収しよう！</li>
          <li>SNSで自分の思いとともにみんなへ拡散だ</li>
          </ul>
        </Section>
        </ol>

        <Section>
        <br />
          <br />
          <Heading2  style={{ 'textAlign': 'center' }}>近くに開催場所がない！感染対策でオンラインで参加したい！</Heading2>
          <ArrowDownContainer>
            <StyledArrowDown />
          </ArrowDownContainer>
          <Heading1 style={{ 'fontSize': '2em'}} id='join-online'>オンラインで参加しよう！</Heading1>
          <div style={{ 'textAlign': 'center' }}>InstagramとTwitterでClimate Shose Actionに参加したい場合は...。</div>
          <ul>
          <li>靴とプラカードの写った写真と「＃シューズアクション」をつけてSNSに投稿！</li>
          <SampleImagesContainer>
          <InstaImageContainer>
          <InstaImage src={sampleInsta} />  
          </InstaImageContainer>
          <TwitterImageContainer>
          <TwitterImage src={sampleTwitter} />  
          </TwitterImageContainer>
          
          </SampleImagesContainer>
          <li>実際に参加者としてカウントされます！</li>
          </ul>
        </Section>

        <Section>
          <Heading1Green>持ち物</Heading1Green>
          <hr />
          <ul>
          <li>靴</li>
          <li>プラカード（任意）</li>
          <li>感染予防グッズ（マスク）</li>
          </ul>
        </Section>
        
        <Section>
          <Heading2Green>Q１：どんな靴がいいの？</Heading2Green>
          <ul>
          <li><Heading3>汚れてもよいもの</Heading3></li>
          <li><Heading3>濡れてもよいもの</Heading3></li>
          <li><Heading3>飛ばされにくいもの</Heading3></li>
          <ul>
          <li>飛ばされやすい場合は重石など各自持参</li>
          </ul>
          <li><Heading3>紛失してもよいもの</Heading3></li>
          <ul>
          <li>&emsp;紛失しても、運営側は責任は取りません。予めご了承ください。</li>
          <li>&emsp;指定時間まで取りに来ない場合は、こちらで処分します。</li>
          <li>&emsp;(ごみゼロにご協力ください！)</li>
          </ul>
          </ul>
        </Section>
        
        <Section>
        <Heading2Green>Q２：どんなプラカードがいいの？</Heading2Green>
        <ul>
        <li><Heading3>各自事前に作ってきてね！</Heading3></li>
        <li><Heading3>デザイン</Heading3></li>
        <ul>
        <li>自分の訴えたいこと！</li>
        <li>なんでも大歓迎！</li>
        <li>一緒に叫ぼう！</li>
        </ul>
        <li><Heading3>大きさ</Heading3></li>
        <ul>
        <li>各自持ち運びやすい大きさ</li>
        </ul>
        <li><Heading3>素材</Heading3></li>
        <ul>
        <li>開催場所を要確認</li>
        <li>例えば...体育館（段ボール・ホワイトボード）</li>
        <li>公園→雨の場合が考えられるため</li>
        <li>（ホワイトボード・布バナー等）</li>
        </ul>
        </ul>

  



        </Section>

      </Body>
    </StyledPage>    
  )
}

export default GDAParticipantInfo
