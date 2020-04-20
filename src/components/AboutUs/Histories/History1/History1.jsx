import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import HistoryBoard from '../../HistoryBoard';
import img from './history1.webp';

const StyledHistory1 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 32.5em;
  height: auto;
  margin-top: -18.37em;
  margin-left: -3.13em;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`;

function History1 () {
  const title = 'FridaysForFuture\n日本での活動の始まり';
  const mainText = '日本では2019年の2月に環境NGOでインターンをしていた学生たちが中心となり、 \
  Fridays For Future Japanの活動が始まりました。 \
  2月22日に国会議事堂の前に集まった人数は15人。 \
  集まったメディアの数よりも少ないスタートでした。';
  const dateText = '2019.2.22';

  return (
    <StyledHistory1>
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='1'
        paddingBottom='20.875em'
      />
      <StyledImage src={img} />
    </StyledHistory1>
  )
}

export default History1;
