import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import HistoryBoard from '../../HistoryBoard';
import img from './history-6.webp';

const StyledHistory6 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 32.5em;
  height: auto;
  margin-left: -4.5em;
  margin-top: -16.75em;
  z-index: 2;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`;
function History6 () {
  const title = '学生気候危機サミット開催！';
  const mainText = '2020年2月には学生が「気候変動」を学び、繋がり、 \
  アクションをするための準備イベントとして３日間の「学生気候危機サミット」を東京・渋谷にて開催しました。 \
  全国各地から100人ほどの学生が参加し、国立環境研究所の江守正多氏をはじめとする様々な専門家をトークゲストとして \
  お招きしました。';
  const dateText = '2020.2.24';

  return (
    <StyledHistory6>
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='6'
        paddingBottom='19.25em'
      />
      <StyledImage src={img} />
    </StyledHistory6>
  )
}

export default History6;
