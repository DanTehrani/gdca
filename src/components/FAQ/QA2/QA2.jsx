import React from 'react';
import styled from 'styled-components';
import Callout2 from '../Callout2';
import TextBoard from '../../TextBoard';
import Avatar from '../Avatar';

const StyledQA2 = styled.div`
  font-size: 1em;
`;

const QContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: -5em;
`;

const AvatarContainer = styled.div`
  margin-left: 0.6em;
  margin-bottom: 2em;
`;

const CalloutContainer = styled.div`
`;

const AContainer = styled.div`
`;

function QA2 (props) {
  const { answer, question, avatarType, color } = props;
  return (
    <StyledQA2>
      <AvatarContainer><Avatar avatarType={avatarType} /></AvatarContainer>
      <CalloutContainer><Callout2 color={color}>{question}</Callout2></CalloutContainer>
      <TextBoard paddingTop='3.125em'>{answer}</TextBoard>
    </StyledQA2>
  )
}

export default QA2;
