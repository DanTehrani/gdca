import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import HistoryBoard from '../../HistoryBoard';
import img from './history2.webp';

const StyledHistory2 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 31.25em;
  height: auto;
  margin-bottom: -18.13em;
  margin-left: -1.875em;
  z-index: 2;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`;

function History2 () {
  const title = '日本で初めての \n グローバルストライキ';
  const mainText = '世界中のGlobal Climate Strikeと合わせて、 \
  2019年3月15日にはマーチを東京と京都で行いました。 \
  マーチの参加者数は2月に行ったアクション時の20倍の300人になりました。';
  const dateText = '2019.3.15';

  return (
    <StyledHistory2>
      <StyledImage src={img} />
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='2'
        paddingTop='20.625em'
        alignDateTextBottom
      />
    </StyledHistory2>
  )
}

export default History2;
