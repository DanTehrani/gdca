import React from 'react';
import styled from 'styled-components';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import media from 'styled-media-query';
import HistoryBoard from '../../HistoryBoard';
import imgWebp from './history-5.webp';
import img from './history-5.png';

const StyledHistory5 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 32.5em;
  height: auto;
  margin-right: -4.5em;
  margin-top: -12.5em;
  z-index: 2;
  ${media.lessThan('small')`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  `};
`;
function History5 () {
  const title = 'FridaysForFutureの支部が \n 各地域に立ち上がる';
  const mainText = '2019年11月に行われたマーチではさらに開催地域が増え、 \
  25都道府県28地域で声が上がり、\
  現在もなおFFF立ち上げ地域は増え続けています。';
  const dateText = '2019.11.29';

  return (
    <StyledHistory5>
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='5'
        paddingBottom='15em'
      />
      <StyledImage src={isWebpSupported() ? imgWebp : img} />
    </StyledHistory5>
  )
}

export default History5;
