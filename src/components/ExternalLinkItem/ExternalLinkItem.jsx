import React from 'react';
import styled from 'styled-components';

const StyledExternalLinkItem = styled.a`
  color: ${props => props.theme.textColor || props.color};
  font-size: ${props => props.fontSize};
  font-family: 'Noto Sans CJK JP';
  text-decoration: none;
`;

function ExternalLinkItem(props) {
  return (
    <StyledExternalLinkItem {...props}>{props.children}</StyledExternalLinkItem>
  )
}

export default ExternalLinkItem;
