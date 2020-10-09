import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import {
  Link
} from 'react-router-dom'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'

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
  font-size: 1.5em;
  ${media.lessThan('medium')`
    font-size: 1em;
  `}
`

const TitleAlignRight = styled(TextLight)`
  display: block;
  width: 85%;
  text-align: right;
  color: #000;
  font-size: 1em;
`

const TitleAlignLeft = styled(TitleAlignRight)`
  text-align: left;
`


const TextAlignRight = styled(TextLight)`
  display: block;
  text-align: right;
  color: #000;
  font-size: 1em;
`
const Section = styled.div`
  margin: 2em 0;
`

const Body = styled.div`
  font-family: ${props => props.theme.fontFamilyLight};
  padding: 0 12em;
  ${media.lessThan('large')`
    padding: 0 1em;
  `}
  line-height: 1.9;
`

const StyledFooterContainer = styled.div`
  margin-top: 5em;
`

const References = styled.div`
  margin: 2em 0;
  font-family: ${props => props.theme.fontFamilyLight};
  font-size: 0.8em;
`

const ReferenceTitle = styled(TextLight)`
  display: block;
  color: #000;
`

const ReferenceText = styled(TextLight)`
  color: #000;
`

const TextSmall = styled(TextLight)`
  color: #000;
  font-size: 1em;
`

const TextSmallUnderline = styled(TextSmall)`
  text-decoration: underline;
  color: ${props => props.theme.blue};
`

const TextSmallRed = styled(TextLight)`
  color: ${props => props.theme.red};
`

const TextSmallBold = styled(TextSmall)`
  font-family: ${props => props.theme.fontFamily};
`

const TextMedium = styled(Text)`
  display: block;
  color: #000;
  font-size: 1.2em;
`

const TextMediumHeading = styled(TextMedium)`
  color: ${props => props.theme.green};
`

const ImagesContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 1em 0;
  ${media.lessThan('large')`
    flex-direction: column;
  `}
`

const Image1Container = styled.div
`
  width: 200px;
  ${media.lessThan('large')`
    width: 80%;
  `}
  height: auto;
`

const Image2Container = styled.div
`
  width: 220px;
  margin: auto;
  ${media.lessThan('large')`
    width: 80%;
  `}
  height: auto;
`

const Image = styled.img`
  width: 100%;
`

const LeftAndRightContainer = styled.div
`
  margin: 2em 0;
  display: flex;
  flex-direction: column-reverse;
  ${media.greaterThan('large')`
    flex-direction: row;
  `}
`

const LeftContainer = styled.div
`
  margin-top: 20px;
  width: 100%;
  ${media.greaterThan('large')`
    width: 50%;
  `}
`

const RightContainer = styled.div
`
width: 100%;
  ${media.greaterThan('large')`
    width: 50%;
  `}
`


function PressReleaseGDCA () {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TitleContainer>
        <TitleAlignLeft>報道関係者各位</TitleAlignLeft>
        <TitleAlignRight>プレスリリース</TitleAlignRight>
        <TitleAlignRight>2020年9月25日</TitleAlignRight>
        <TitleAlignRight>Fridays for Future Japan</TitleAlignRight>
        <TitleAlignRight>世界気候アクション0925企画者国内有志</TitleAlignRight> 
        <br />
        <Title>若者が世界150カ国以上3500カ所で「世界気候アクション0925」を行い、</Title>
        <Title>日本でも32都道府県75カ所で様々なイベントが開催</Title>
        <Title>全国統一シューズアクションを開催し約1800足の靴が集まる</Title>
        <br />
        
      </TitleContainer>
      <Body>
        9月25日（金）に世界一斉で気候危機に対して声を上げる「
        <TextSmallRed bold>​世界気候アクション0925​</TextSmallRed>
        （英語名 Global Day of Climate Action）（以下、GDCA）」
        が行われました。世界では150カ国以上、3500以上のイベントが企画されました。　
        <br />
         &emsp;日本では、日本政府に本気の気候変動対策の実行を求め、32都道府県75カ所で開催されました。
      
      <ImagesContainer>
        <Image1Container><Image src={img1} /></Image1Container>
        <Image1Container><Image src={img2} /></Image1Container>
        <Image1Container><Image src={img3} /></Image1Container>
      </ImagesContainer>
      
         &emsp;私たちは、
        <Link to='/gdca-demand'target="_blank">
          <TextSmallUnderline bold>
          ​1.5度目標の達成と早急な対策の実施、公正な政策決定のプロセス、若者の意見の尊重​
          </TextSmallUnderline>
        </Link>
        を求めます。
        また、Fridays for Future Japan（以下、FFFJ）は日本政府にこれらを求める署名活動も行っています。GDCAではより多くの署名を集めることを目標にしました。
        <br />
         &emsp;GDCAでは全国統一で行うアクションとして、靴とプラカードを置く「ClimateShoes Action」を全国34箇所で開催しました。感染症対策として密を避けるため、これまで行っていたグローバル気候マーチから私たちの体だけが抜け出した様子を再現し、​「
        <TextSmallRed bold>
        ​マーチはできないけど気候危機に対して声をあげなければならない
        </TextSmallRed>
        ​」​という思いを表現しました。
        <br />  
         &emsp;若者だけではなく、若者の声に共感する大人や企業・団体・学校も企画、参加しました。また、オンライン上での＃シューズアクションをつけたインスタグラムの投稿は約830件（25日19時時点）にのぼりました。会場での参加とインスタグラムでの参加を合わせて約1800足が集まりました。
         <br />  
        <br />  
        &emsp;シューズアクションを企画したFridays for Future Tokyoの黒部睦さん(国立音楽大学1年/19歳)は、「マーチができない中、『Climate Shoes Action』という形で、私たちの声を発信することができました。気候変動は、感染症と同じく、私たちの生活と命を脅かす「危機」であり、早急の対策が求められます。一つの感染症でこれほど社会が混乱するのであれば、
        <TextSmallUnderline>
        <a href="http://www.env.go.jp/press/files/jp/110087.pdf" target='_blank'>気候危機で起こりうる異常気象や災害などの連鎖</a>
        </TextSmallUnderline>
        は、より恐ろしい健康被害や経済へのダメージを引き起こすことが考えられます。」と述べています。
        <br />  
        <br />  
      
        &emsp;同日には、アクションを行っている各地域の会場からの全国中継インスタライブ、「＃気候危機に特効薬なし」のハッシュタグでのツイートストーム、自転車アクション、フォトアクション、講演会やスタンディングデモなどが行われました
        （<Link to='/gda-application-form#actions-list' target="_blank">
          <TextSmallUnderline>
          各開催場所詳細
          </TextSmallUnderline>
        </Link>）。
        オンライン、オフラインを合わせたGDCA自体への参加者数は約2400人でした。
        <br />  
        <LeftAndRightContainer>
        <LeftContainer>
        <Image2Container>
          <Image src={img4} />
        </Image2Container>
        </LeftContainer>
        <RightContainer>
        &emsp;全国中継インスタライブではアクション中の6地域とFFFJapanのアカウントを繋ぎ、中継しました。インスタライブに出演したFridays for Future Nagoyaの勝田あみさん（名城大学4年/21歳）は、「当日は雨が降ってしまいましたが、急に雨が止みました。世界のFFFの想いが空に届いたのではないかと思い、嬉しかったです。私自身、初めてFFFでのアクション参加だったのですが、すごく楽しく盛り上がりました。そしてInstagramライブで日本全国の若者とつながり、私たちの声が大きなものになっているのだと実感しました。雨の中足を運んでくれた方々もいて、改めて企画してよかったと感じました。これからもみんなで楽しく気候変動に対して活動していきたいです。」と述べています。
        </RightContainer>
        </LeftAndRightContainer>
        
        <br />  
        <br />  
        
        <TextMedium>アクション主催者のコメントと当日の写真はこちらからご覧いただけます。</TextMedium>
        <TextMedium>(メディア利用可）</TextMedium>
        <a href="https://drive.google.com/drive/folders/1anF-EJYdKxKMHO-_DNPGtXbFmD5IUKYz" target='_blank'>
          https://drive.google.com/drive/u/0/folders/1anF-EJYdKxKMHO-_DNPGtXbFmD5IUKYz
        </a>  
        
        <br />  
        <br />  
        
        <TextMedium>連絡先</TextMedium>
        <ul>
          <li>担当者：奥野華子（FFFJapan/Hiroshima）</li>
          <li>電話番号：080-1635-2179</li>
          <li>e-mail：media@fridaysforfuture.jp</li>
          <li>HP：https://fridaysforfuture.jp</li>
        </ul>
      </Body>
      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </StyledPage>
  )
}

export default PressReleaseGDCA
