import React from 'react';
import styled from 'styled-components';
import img from './what-is-fffjapan.webp';
import media from 'styled-media-query';

const StyledWhatIsFFFJapan = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  ${media.lessThan('large')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};
`;

const StyledImage = styled.img`
  width: 37.5em;
  margin-right: 1.81em;
  margin-top: 3.125em;
  ${media.lessThan('large')`
    margin-right: 0;
  `};
  ${media.lessThan('small')`
    width: 90vw;
  `};
`;

const StyledTextBoard = styled.div`
  font-size: 1em;
  max-width: 26.875em;
  padding: 3.75em 3.125em 3.625em 3.125em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.beige};
  ${media.lessThan('large')`
    margin-top: 3em;
  `};
`;

const StyledTextBoardTitle = styled.div`
  font-size: 1.5em;
  font-family: ${props => props.theme.fontFamilyBold};
`;

const StyledTextBoardBody = styled.div`
  font-size: 1em;
  margin-top: 2.68em;
  line-height: 1.625em;
  font-family: ${props => props.theme.fontFamily};
`;

function WhatIsFFFJapan () {
  return (
    <StyledWhatIsFFFJapan>
      <StyledImage src={img} />
      <StyledTextBoard>
        <StyledTextBoardTitle>FridaysForFuture Japanとは？</StyledTextBoardTitle>
        <StyledTextBoardBody>
          FridaysForFuture（未来のための金曜日）は、2018年8月に当時15歳のグレタ・トゥーンベリが、
          気候変動に対する行動の欠如に抗議するために、一人でスウェーデンの国会前に座り込みをしたことをきっかけに始まった運動です。
          彼女のアクションは、多くの若者の共感を呼び、すぐさま世界的な広がりを見せました。
          2019年9月20日から1週間行われた“Global Week for Future”では、世界で700万人以上がストライキをし、気候変動に対する行動を求めました。
          この世界的なムーブメントに共感する若者は、ここ日本にもたくさんいました。2019年2月、日本でのFridaysForFutureの運動が東京から始まります。発足以来、学生たちを中心に、徐々に全国各地に活動が広がっています。
        </StyledTextBoardBody>
      </StyledTextBoard>
    </StyledWhatIsFFFJapan>
  )
}

export default WhatIsFFFJapan;
