import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { withTheme } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import GDAHeader from '../components/GDAHeader'
import Footer from '../components/Footer'
import Heading from '../components/GDAApplicationForm/Heading'
import Heading2 from '../components/GDAApplicationForm/Heading2'
import SectionHeading from '../components/GDCA/SectionHeading'
import GDCAHeading2 from '../components/GDCA/GDCAHeading2'
import GDCAPageHeading from '../components/GDCA/GDCAPageHeading'
import GDCAFooter from '../components/GDCA/GDCAFooter'
import SentenceContainer from '../components/GDAApplicationForm/SentenceContainer'
import ActionsList from '../components/GDAApplicationForm/ActionsList'
import GoogleForm from '../components/GDAApplicationForm/GoogleForm'
import Page from '../components/Page'
import ClimateJusticeNow from '../components/RandomImages/ClimateJusticeNow'
import ShoesHand from '../components/RandomImages/ShoesHand'
import GDCAOrganize from '../components/RandomImages/GDCAOrganize'
import GDCAExamplePic from '../components/GDCA/GDCAExamplePic'
import Text from '../components/Text'
import explain from '../components/GDAApplicationForm/explain'
import eventsImgSrc from './events.png'


const HeaderContainer = styled.div`
  margin-bottom: 6em;
`

const FooterContainer = styled.div`
  margin-top: 2.5em;
`

const StyledGDAApplicationForm = styled.div`
  font-size: 16px;
  ${media.lessThan('large')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
  ${media.lessThan('small')`
    font-size: 14px;
  `}
`

export const Heading1Container = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${
    media.greaterThan('medium')`
      flex-direction: row-reverse;
    `
  }
`;

const Box1Container = styled.div
`
  margin: 50px 0;
  ${
    media.greaterThan('medium')`
      padding: 0 200px;
    `
  }
`;

const Box2Container = styled.div
`
  margin: 50px 0;
  ${
    media.greaterThan('medium')`
      padding: 0 100px;
    `
  }
`;

const ActionsListContainer = styled.div
`
  margin-top: 30px;
`

const FormContainer = styled.div
`
  margin: 100px 0;
`

export const Image1Container = styled.div
`
  width: 125px;
  display: none;
  ${media.greaterThan('medium')
    `
      display: block;
      margin-right: 40px;
    `
  }
`

export const Image2Container = styled.div
`
  width: 125px;
  text-align: center;
  ${media.greaterThan('medium')
    `
      display: block;
      margin-left: 40px;
      text-align: left;
    `
  }
`

const GuidesContainer = styled.div
`
  padding-top: 2em;
  padding-bottom: 4em;
  ${media.greaterThan('medium')`
  width: 70%;
  `}
  margin: auto;
`

const GuidesTitle = styled(Text)
`
  font-size: 1.8em;
`

const GuideTitle = styled(Text)
`
  display: block;
  ${media.greaterThan('medium')
    `
    width: 210px;
    `
  }
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.black} !important;
  text-decoration: underline !important;
  font-size: 1.3em;
  &:hover {
    cursor: pointer !important;
  }
  
`



const Row = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${media.lessThan('medium')`
  flex-direction: column;
  `}
`

const StyledCol = styled.div
`
  text-align: center;
  padding: 1em 0;
`

const DemandSection = styled.div
`
  margin: 2em 0;
`

const DemandsContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;
`

const DemandContainer = styled.div
`
  width: 340px;
  font-weight: bold;
  font-size: 1.1em;
  color: ${props => props.theme.black};
`

const DemandDetailsText = styled(Text)
`
  
`

const AboutPetitionContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1rem;
`

const DownloadQRButtonContainer = styled.div
`
  text-align: center;
  margin: 2rem 0;
`


const DownloadQRButton = styled.button
`
  font-size: 1rem;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.beige};
  border: 0;
  &:hover {
    cursor: pointer;
  }
`



function GDAApplicationForm (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  const organizeWidth = isMobileOrTablet ? '330px' : '430px'
  
  return (
    <Page maxWidth='1280px'>
      <HeaderContainer><GDAHeader /></HeaderContainer>
      <StyledGDAApplicationForm>
        <Heading1Container>
          <GDCAOrganize width={organizeWidth}/>
        </Heading1Container>
        <Box1Container>
        <GDCAExamplePic />
          <SentenceContainer>
          {explain}
          <AboutPetitionContainer>
            <br />
            現在、
            <ul>
              <li>1.5度目標の達成と早急な対策の実施</li>
              <li>公正な政策決定のプロセス</li>
              <li>若者の意見の尊重</li>
            </ul>
            の3項目を求める署名も行っています。
            ぜひ、アクションを行う際は、署名用QRコードを使い署名集めにご協力ください！
          </AboutPetitionContainer>
          <DownloadQRButtonContainer>
            <a href="/fffj-petition-qr.zip" download>
            <DownloadQRButton><Text bold>署名用QRコードをダウンロード</Text></DownloadQRButton>
            </a>
          </DownloadQRButtonContainer>
          </SentenceContainer>
        </Box1Container>
        {
          isMobileOrTablet ?
          <>
            <GDCAHeading2>アクションモデル</GDCAHeading2>
            <GDCAHeading2>ガイドライン</GDCAHeading2>
          </>
          : <GDCAHeading2>アクションモデルガイドライン</GDCAHeading2>
        }
        <GuidesContainer>
          <Row>
            <StyledCol><Link to='gdca-action-guide'><GuideTitle>企画：地域版</GuideTitle></Link></StyledCol>
            <StyledCol><Link to='gdca-action-guide-university'><GuideTitle>企画：大学版</GuideTitle></Link></StyledCol>
            <StyledCol><Link to='gdca-action-guide-school'><GuideTitle>企画：小中高校版</GuideTitle></Link></StyledCol>
          </Row>
          <Row>
            <StyledCol><Link to='gdca-participants-info'><GuideTitle>参加者の心得</GuideTitle></Link></StyledCol>
            <StyledCol><Link to='gdca-crisis-management'><GuideTitle>危機管理ガイドライン</GuideTitle></Link></StyledCol>
            <StyledCol><Link to='gdca-action-guide-school'><GuideTitle></GuideTitle></Link></StyledCol>
          </Row>
        </GuidesContainer>
        <FormContainer>
          <SectionHeading title='*登録は締め切りました'/>
        </FormContainer>
        <Box2Container id='actions-list'>
          <GDCAPageHeading 
            title='&emsp;&nbsp;イベント一覧&emsp;&nbsp;'
            color={props.theme.blue}
            textImgSrc={eventsImgSrc}
          />
          <ActionsListContainer>
            <ActionsList />
          </ActionsListContainer>
        </Box2Container>
        
      </StyledGDAApplicationForm>
      <GDCAFooter />
    </Page>
  )
}

export default withTheme(GDAApplicationForm)
