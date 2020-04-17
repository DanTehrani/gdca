import React from 'react';
import styled from 'styled-components'
import media from 'styled-media-query';

const StyledLabelText = styled.span`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.backgroundColor || '#fff'};
  font-size: ${props => props.fontSize || '16px'};
  font-family: 'Noto Sans CJK JP';
  padding: 0px 5px;
`;

function LabelText (props) {
  return (
    <StyledLabelText
      fontSize={props.fontSize}
      backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledLabelText>
  )
}

export default LabelText;
