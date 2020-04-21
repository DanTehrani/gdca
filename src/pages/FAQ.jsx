import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import media from 'styled-media-query';
import { ORGANIZE_GOOGLE_FORM_URL } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from '../components/Page';
import QA from '../components/FAQ/QA';
import QA2 from '../components/FAQ/QA2';

const StyledFAQ = styled.div`
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
`;

const HeaderContainer = styled.div`
  margin-bottom: 2.5em;
`;

const FooterContainer = styled.div`
  margin-top: 2.5em;
`;

const QARow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & >:nth-child(2) {
    margin-top: 12.31em;
  }
`;

const QAContainer = styled.div`
  max-width: 47.3%;
  ${media.lessThan('large')`
    max-width: 100%;
    margin-top: 3em;
  `}
`;

const qas = [
  {
    question: 'そもそもFridaysForFutureってどういう運動なんですか？',
    answer: 'FridaysForFutureはスウェーデンの高校生、 \
    グレタトゥーンベリ（17）が始めた学校ストライキをきっかけに始まった史上最大の気候変動対策運動です。 \
    2018年8月彼女は「（気候変動のせいで）なくなるかもしれない未来のためにどうして勉強しないといけないのか」と考え、 \
    学校をストライキしてスウェーデンの国会前で一人で座り込みし、気候危機対策強化・気候正義を訴えました。\
    その後、彼女の考えや行動に共鳴した世界各地の若者が同様の運動を始め、\
    昨年の９月では世界760万人が参加する最大の気候運動にまで成長しました。',
    color: '#0032C8',
    avatarType: 1
  },
  {
    question: 'FridaysForFuture Japanは何を求めて活動しているの？',
    answer: '世界の平均気温上昇を産業革命前に比べて1.5℃に抑え、\
    気候危機の被害を抑えるために、日本の気候政策を変えることです。​​',
    color: '#C80032',
    avatarType: 2
  },
  {
    question: 'FridaysForFuture Japanの活動にはどうやって参加すれば良いですか？',
    answer: (<span>オーガナイザーとして活動したいと考えている方は、
    ぜひ<u><a href={ORGANIZE_GOOGLE_FORM_URL} target='_blank'>こちら</a></u>のフォームからご応募ください。
    さらに詳しくは、<Link to='to-organize-form'>こちら</Link>をご確認ください。</span>),
    color: '#007850',
    avatarType: 3
  },
  {
    question: 'FridaysForFuture Japanに代表はいるんですか？',
    answer: '活動のためにどれだけの時間をかけられるかには個人差がありますが、\
    私たちの間には上下関係はなく、代表もいません。​',
    avatarType: 4,
    color: '#C80032'
  }
]

function FAQ () {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1170px)' });

  return (
    <Page maxWidth='1120px'>
      <HeaderContainer><Header /></HeaderContainer>
        <StyledFAQ>
          {
            qas.map((qa, i) =>
              isMobileOrTablet ?
              <QAContainer><QA2 {...qa} /></QAContainer>
              : !(i % 2) &&
              <QARow key={i}>
                <QAContainer><QA {...qa} /></QAContainer>
                {
                  qas.length > i + 1 &&
                  <QAContainer><QA {...qas[i + 1]} /></QAContainer>
                }
              </QARow>
            )
          }
        </StyledFAQ>
      <FooterContainer><Footer /></FooterContainer>
    </Page>
  );
}

export default FAQ;
