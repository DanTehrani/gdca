import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Page from '../../../components/Page'
import TextLight from '../../../components/TextLight'
import Text from '../../../components/Text'

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

const TitleSmall = styled(Title)`
  display: block;
  font-size: 1.72em;
`

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`

const Image = styled.img`
  width: 450px;
  ${media.lessThan('large')`
    width: 250px;
  `}
  height: auto;
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

const Link = styled.a`
  color: ${props => props.theme.black};
  text-decoration: underline;
`

const TextSmall = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 0.9em;
`

const TextSmallRed = styled(TextLight)`
  color: ${props => props.theme.red};
`

const TextMedium = styled(TextLight)`
  display: block;
  color: #000;
  font-size: 1.1em;
`

const TextMediumHeading = styled(TextMedium)`
  color: ${props => props.theme.green};
`

const TitleAlignRight = styled(TextLight)`
  display: block;
  width: 85%;
  text-align: right;
  color: #000;
  font-size: 1em;
`

const TitleAlignLeft = styled(TitleAlignRight)
`
  text-align: left;
`

const TextBold = styled(Text)
`
  color: ${props => props.theme.black};
`

function PressRelease201026 () {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TitleContainer>
        <TitleAlignLeft>報道関係者各位</TitleAlignLeft>
        <TitleAlignRight>プレスリリース</TitleAlignRight>
        <TitleAlignRight>2020年10月26日</TitleAlignRight>
        <TitleAlignRight>Fridays For Future Japan</TitleAlignRight>
        <Title>
          菅首相による2050年温室効果ガス実質ゼロ目標
        </Title>
        <Title>の宣言に際してのコメント</Title>
      </TitleContainer>
      <Body>
        <Section>
        本日、10月26日に開催された臨時国会における所信表明演説において、2050年に向けて温室効果ガス排出を実質ゼロにする目標が菅首相から宣言されました。
        <br />
        しかし宣言だけでは気候危機は止まりません。具体的な気候変動対策をいち早く実行していくことが重要です。

        </Section>
      
        <Section>
          気候危機を食い止め、産業革命以降の気温上昇を1.5度以下に抑えるためには、できるだけ速やかに温室効果ガスの削減を進めていくことが必要です。
          <TextBold bold>具体的には現在見直しが始まっているエネルギー基本計画において2030年の再生可能エネルギーの割合目標を引き上げると共に石炭火力発電から脱却し、パリ協定に定められている2030年までの温室効果ガス国別排出量目標（NDC）を1.5度目標に対し、より整合性のある野心的なものに引き上げることを求めます。
          </TextBold>
          国連の気候変動に関する政府間パネル（IPCC）は、
          <Link 
          href="https://www.ipcc.ch/2018/10/08/summary-for-policymakers-of-ipcc-special-report-on-global-warming-of-1-5c-approved-by-governments/#:~:text=Global%20net%20human%2Dcaused%20emissions,removing%20CO2%20from%20the%20air"
          target='_blank'  
            >
          気温上昇を1.5℃に抑えるには世界全体で2030年に45％の排出削減（2010年比）が必要と発表
          </Link>
          していますが、
          <Link
            href='https://mainichi.jp/articles/20200330/k00/00m/040/212000c '
            target='_balnk'
          >
          日本のNDCは26％（2013年度比）
          </Link>
          という不十分な内容にとどまっています。

        </Section>
        
        <Section>
        これからも私たちは日本の気候変動政策、及びエネルギー政策を注視していきます。今日の宣言を形だけの宣言に留めず、将来世代を裏切らないような政策を取ってください。私達はすでに気候危機の中にいます。猛暑や豪雨など気候危機の影響が深刻化している今、この問題の緊急性を踏まえた迅速な対応を求めます。
        </Section>
        
        <Section>
        <TextMedium>代表連絡先</TextMedium>
        <ul>
          <li>堺大輔（Fridays For Fututre Saitama）：070-3663-0636</li>
          <li>酒井功雄（Fridays For Future Tokyo）：080-1349-0349 </li>
          <li>Email：media@fridaysforfuture.jp</li>
          <li>HP: https://fridaysforfuture.jp/</li>
        </ul>
        </Section>
      </Body>

      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </StyledPage>
  )
}

export default PressRelease201026
