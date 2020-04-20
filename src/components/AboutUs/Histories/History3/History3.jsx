import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import HistoryBoard from '../../HistoryBoard';
import img1 from './history-3-1.webp';
import img2 from './history-3-2.webp';

const StyledHistory3 = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${media.lessThan('large')`
    align-items: center;
  `};
`;

const StyledImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -14.94em;
  margin-right: -2.5em;
  & >:nth-child(1) {
    margin-right: 0.16em;
  }
  & >:nth-child(2) {
    margin-left: 0.16em;
  }
  ${media.lessThan('large')`
    margin-right: 0;
  `};
`;

const StyledImage = styled.img`
  width: 18.43em;
  height: auto;
  z-index: 2;
  ${media.lessThan('small')`
    width: 44vw;
  `};
`;

function History3 () {
  const title = '3回目の気候マーチ';
  const mainText = '2019年5月24日のマーチの際には東京と京都の2ヶ所開催で450人の動員になりました。 \
  世界各地のアクションと比べるとまだまだ少なかったですが、 \
  少しずつ参加者数が増えてきたことに希望が持てました。';
  const dateText = '2019.5.24';

  return (
    <StyledHistory3>
      <HistoryBoard
        title={title}
        mainText={mainText}
        dateText={dateText}
        countText='3'
        paddingBottom='17.4em'
      />
      <StyledImagesContainer>
        <StyledImage src={img1} />
        <StyledImage src={img2} />
      </StyledImagesContainer>
    </StyledHistory3>
  )
}

export default History3;
