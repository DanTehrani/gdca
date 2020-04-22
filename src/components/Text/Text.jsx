import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.color || props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

function Text (props) {
  return (
    <StyledText {...props}>{props.children}</StyledText>
  )
}

export default Text;
