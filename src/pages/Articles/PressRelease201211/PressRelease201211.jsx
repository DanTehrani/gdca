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
import img from './img.png'

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

const TitleAlignRight = styled(TextLight)`
  display: block;
  width: 85%;
  text-align: right;
  color: #000;
  font-size: 1em;
`

const TextAlignRight = styled(TextLight)`
  display: block;
  text-align: right;
  color: #000;
  font-size: 1em;
`

const TextAlignLeft = styled(TextAlignRight)`
  text-align: left;
`

const TitleSmall = styled(Title)`
  display: block;
  font-size: 1.72em;
`

const ImageContainer = styled.div`
  width: 50%;
  ${media.lessThan('large')`
    width: 100%;
  `}
  text-align: center;
  padding-left: 20x;
`

const Image = styled.img`
  width: 100%;
  ${media.lessThan('large')`
    width: 250px;
  `}
  height: auto;
`

const Section = styled.div`
  margin: 2em 0;
  text-align: ${props => props.centered ? 'center' : 'left' };
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

const Heading = styled.div
`
  text-align: center;
  font-size: 1em;
`

const Row = styled.div
`
  display: flex;
  flex-direction: row;
  ${media.lessThan('large')`
    flex-direction: column;
  `}
`


const Column = styled.div
`
  width: 50%;
  ${media.lessThan('large')`
    width: 100%;
  `}
`

const Table = styled.table
`
  border-width: 1px;
  border-style : solid;
  border-collapse: collapse;
  td {
    border-width: 1px;
    border-style : solid;
  }
`

const Td1 = styled.td
`
  padding: 20px;
  white-space: nowrap;
  ${media.lessThan('large')`
    padding: 10px;
  `}
`


const Td2 = styled.td
`
  padding-left: 10px;
`

const TextSmallRed = styled(TextLight)`
  color: ${props => props.theme.red};
`


function PressRelease201211 () {
  return (
    <StyledPage maxWidth='1120px'>
      <Header />
      <TitleContainer>
        <TextAlignLeft>報道関係者各位</TextAlignLeft>
        <TextAlignRight>プレスリリース</TextAlignRight>
        <TextAlignRight>2020年12月11日</TextAlignRight>
        <TextAlignRight>Fridays For Future Japan</TextAlignRight>
        
        <Title>
        国民会議開催に伴い、若者が <br />
「1.5℃目標の実現と国民を巻き込んだ公正な議論」を求める <br />
署名を政府に提出

        </Title>
      </TitleContainer>
      <Body>
        <Section>
        私たちFridays For Future Japanは2020年12月中旬に政府により開催される国民会議（※1）開催に伴い、「1.5℃目標の実現と国民を巻き込んだ公正な議論」を求める署名を政府に提出し、記者会見を行います。
        </Section>
        
        <Section>
        Fridays For Future Japan(以下、FFFJ)は日本の気候変動政策を強化するため、 全国各地域で気候非常事態宣言発表や石炭火力発電所の建設中止、国政に対して温室効果ガス削減目標(通称、NDC)の引き上げを求めて活動している若者のムーブメントです。
        </Section>
        
        <Section>
        2020年12月中旬に開催される<TextSmallRed bold>国民会議で気候変動に対する議論が行われる事に際し、「1.5℃目標の実現と国民を巻き込んだ公正な議論」を求める多くの人々の声を届けるため署名を提出します。</TextSmallRed>
        </Section>
        
        <Section>
        <Row>
          <Column>
          FFFJが2020年8月下旬から開始した署名（※2）は、
          2020年12月10日現在2万6000筆以上集め、
          主に以下の３つを政府に求める声明文（※3）に対し多くの賛同を得ています。
          <br />
          （写真：2020年12月10日午前10時現在）<br />
          （1）1.5度目標の達成と早急な対策の実施  <br />
          （2）公正な政策決定のプロセス <br />
          （3）若者の意見の尊重<br />
          署名は12月14日正午で締め切る予定です。最終結果については以下記述の記者会見で報告します
          </Column>
          <ImageContainer>
            <Image src={img} />
          </ImageContainer>
        </Row>

        </Section>
        
        <Section>
        <a href="https://www.nikkei.com/article/DGXMZO66839200R01C20A2EAF000" target='_blank'>※1　日本経済新聞（2020）「脱炭素へ「国民会議」設置　政府、今月中旬にも」</a>　（12月10日閲覧）<br />
        <a href="http://chng.it/ZfXKfbw7" target='_blank'>※2　署名ページ　change.org</a> <br />
        <a href="https://fridaysforfuture.jp/statement-2020-08-21" target='_blank'>※3　声明文全文　FFFJapanHP掲載</a>
        </Section>

        <Section>
        以下の日程で記者会見を行うことをお知らせします。署名提出の現地取材については、新型コロナウイルス感染症予防のためお断りさせていただきます。提出の報告は記者会見で行います。あらかじめご了承ください。また記者会見についてはオンラインでの開催予定です。

        </Section>
        
        <Section>
        <Heading>【記者会見案内】</Heading>
        <Table>
          <tr>
            <Td1>開催日時</Td1>
            <Td2>2020年12月16日　16:00~17:00</Td2>
          </tr>
          <tr>
            <Td1>オンライン会場</Td1>
            <Td2>zoom（ウェビナー）<br/>
https://us02web.zoom.us/j/89688890223?pwd=OEhlZldVVDl2L3BuZUVhd1dKYW1Sdz09<br/>
ID：896 8889 0223<br/>
パスワード： 20201216 <br/></Td2>
          </tr>
          <tr>
            <Td1>内容</Td1>
            <Td2>署名の最終結果と提出の報告、国民会議に対するFFFJのコメント</Td2>
          </tr>
          <tr>
            <Td1>問い合わせ</Td1>
            <Td2>提出者代表者名：国立音楽大学1年<br />
黒部睦(Fridays For Future Tokyo/Japan所属) <br />
電話番号：080-9975-8672<br />
メールアドレス：miley.mutsumi@gmail.com</Td2>
          </tr>
        </Table>
        ※zoom参加の、名前設定を「名前_所属名」に行ったうえでの参加をお願いいたします。
        </Section>
        
        <Section centered>
        代表連絡先 <br />
中村 涼夏（Fridays For Fututre Japan）：080-1561-9887  <br />
Email：media@fridaysforfuture.jp <br />
HP: http://fridaysforfuture.jp/

        </Section>


      </Body>

      <StyledFooterContainer>
        <Footer />
      </StyledFooterContainer>
    </StyledPage>
  )
}

export default PressRelease201211
