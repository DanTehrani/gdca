import React from 'react'
import media from 'styled-media-query'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import NewsPickUp from './NewsPickUp'
import Text from '../../components/Text'
import BlueTitle from './BlueTitle'

const StyledNewsPickUps = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`

const Column2 = styled.div
`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding-left: 40px;
`

const Column1 = styled(Column2)
`
  border-right: solid 1px;
  border-color: ${props => props.theme.blue};
  padding-right: 20px;
`

const VerticalDivider = styled.div
`
  
`

const TitleContainer = styled.div
`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
  ${media.lessThan('medium')`
    margin-left: 10px;
  `}
`

const Title = styled(Text)
`
  color: ${props => props.theme.blue};
  font-size: 22px;
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
`


const newsPickups = [
  {
    title: '金曜日の小さくても大きな一歩の、メッセージ',
    url: 'https://www.keenfootwear.com/ja-jp/blog-article-137861837.html',
    by: 'keen'
  },
  {
    title: '靴も訴える気候変動危機　福岡と太宰府で若者ら',
    url: 'https://digital.asahi.com/articles/ASN9V6SNQN9TTIPE001.html',
    by: '朝日新聞（福岡・大宰府）'
  },
  {
    title: '「地球守ろう」若者訴え　札幌でも世界気候アクション　プラカード掲げ署名募る',
    url: 'https://www.hokkaido-np.co.jp/article/464110',
    by: '北海道新聞'
  },
  {
    title: '国会議事堂前に多くの“靴“が残された理由。「時間がない」、若者たちの思いとは',
    url: 'https://news.yahoo.co.jp/articles/947cf54048deaf02d699dee61f0b648c25cebfba',
    by: 'ヤフーニュース（静岡）'
  },
  {
    title: '9月25日は世界気候アクション　日本でもイベントが多数開催',
    url: 'https://energy-shift.com/news/ba048b3f-937e-458e-8afd-48d9a34cdb46',
    by: 'energy shift'
  },
  {
    title: '靴とプラカードを並べ温暖化対策を訴える　コロナ時代の新しい環境活動',
    url: 'https://www.tokyo-np.co.jp/article/56568',
    by: '東京新聞'
  },
  {
    title: '世界気候アクション0925：私たちが気候危機を止められる最後の世代',
    url: 'https://jn.lush.com/article/global-day-of-climate-action-0925',
    by: 'LUSH'
  },
  {
    title: '9月25日は世界気候アクション0925。国会議事堂前やBurtonやpatagoniaのショップなど各地でシューズアクション開催',
    url: 'https://www.google.co.jp/amp/s/amp.amebaownd.com/posts/10416258',
    by: 'DEAL'
  },
  {
    title: '＃私たちは気候危機を止められる最後の世代',
    url: 'https://www.ohkawa-inc.co.jp/2020/09/26/%EF%BC%83%E7%A7%81%E3%81%9F%E3%81%A1%E3%81%AF%E6%B0%97%E5%80%99%E5%8D%B1%E6%A9%9F%E3%82%92%E6%AD%A2%E3%82%81%E3%82%89%E3%82%8C%E3%82%8B%E6%9C%80%E5%BE%8C%E3%81%AE%E4%B8%96%E4%BB%A3/',
    by: '大川印刷'
  },
  {
    title: 'コロナ禍でマーチができない間も気候変動は悪化している！傍観者でいることに居ても立ってもいられなくなりました」!!',
    url: 'https://iwj.co.jp/wj/open/archives/481755',
    by: 'IWJ'
  },
  {
    title: '「私たちが動かず、だれが未来を変えられるか」大学生ら32都道府県で気候変動対策訴え',
    url: 'https://www.sustainablebrands.jp/sp/news/jp/detail/1198200_2135.html',
    by: 'サスティナブルブランドジャパン'
  },
  {
    title: '身近に迫る気候危機は他人事ではない。マーチはなくとも行動できる。世界気候アクション0925',
    url: 'https://www.a-kimama.com/culture/2020/09/110839/',
    by: 'Akimama'
  },
  {
    title: '世界気候アクション0925　 声を上げる若者たち、聞く耳を持たない大人たち。なぜ、今行動しないのか？',
    url: 'https://www.a-kimama.com/culture/2020/10/111094/',
    by: 'Akimama（東京）'
  },
  {
    title: '気候変動　道内の若者、世界と連帯　２５日にアクション　「危機止めたい」',
    url: 'https://www.google.co.jp/amp/s/www.hokkaido-np.co.jp/sp/amp/article/462434',
    by: '北海道新聞'
  },
  {
    title: 'デモの代わりに靴を持ち寄って　若者ら、気候危機訴え',
    url: 'https://www.google.co.jp/amp/s/www.asahi.com/amp/articles/ASN9R6WJKN9MUTNB008.html',
    by: '朝日新聞（埼玉）'
  },
  {
    title: '気候変動、本気で向き合う　さいたまで世界一斉行動　靴並べ、デモ行進表現',
    url: 'https://www.google.co.jp/amp/s/www.tokyo-np.co.jp/amp/article/57885',
    by: '東京新聞'
  },
  {
    title: '気候危機対策、世界の若者訴え　高志高・森さんもＳＮＳ発信',
    url: 'https://www.chunichi.co.jp/article/134160',
    by: '中日新聞（福井）'
  },
  {
    title: 'あす世界一斉に｢気候アクション｣、県内でも神山で企画',
    url: 'https://www.google.co.jp/amp/s/www.topics.or.jp/articles/amp/423273',
    by: '徳島新聞'
  },
  {
    title: '温暖化対策強化、１００人分訴え',
    url: 'https://mainichi.jp/articles/20200926/ddm/001/040/133000c',
    by: '毎日新聞'
  },
  {
    title: '靴並べ、温暖化対策訴え　日本の学生ら、あす参加呼び掛け',
    url: 'https://mainichi.jp/articles/20200924/dde/041/040/024000c',
    by: '毎日新聞'
  },
  {
    title: 'コロナ渦でも未来へうったえ　世界気候アクション',
    url: 'https://news.line.me/issue/oa-asahikids/4ekrf45y8pms',
    by: 'LINEニュース'
  },
  {
    title: 'afterFITレポート 気候アクション0925',
    url: 'https://youtu.be/Ztlg8HFPZEY',
    by: 'after fit'
  }
]

function NewsPickUps (props) {
  const { text, url } = props
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  
  return (
    <>
    <TitleContainer>
      <BlueTitle withShoes text='ニュースピックアップ' />
    </TitleContainer>
    <StyledNewsPickUps>
      
        {
          isMobileOrTablet ?
          <Column2>
            {
              newsPickups.map((pickup, i) => 
                  <NewsPickUp 
                    text={pickup.title}
                    by={pickup.by}
                    url={pickup.url}
                  />
              )
            }
            </Column2>
          :
          <>
          <Column1>
          {
            newsPickups.map((pickup, i) => 
              (newsPickups.length / 2) > i &&
                <NewsPickUp 
                  text={pickup.title}
                  by={pickup.by}
                  url={pickup.url}
                />
            )
          }
          </Column1>
          <Column2>
          {
            newsPickups.map((pickup, i) => 
              (newsPickups.length / 2) < i &&
                <NewsPickUp 
                  text={pickup.title}
                  by={pickup.by}
                  url={pickup.url}
                />
            )
          }
          </Column2>
          </>
        }
    </StyledNewsPickUps>
    </>
  )
}

export default NewsPickUps
