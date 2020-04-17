import React from 'react';
import styled from 'styled-components'
import{ Link } from 'react-router-dom';

const StyledLinkItem = styled(Link)`
  color: ${props => props.theme.textColor || props.color};
  background-color: ${props => props.backgroundColor || 'none'};
  font-size: ${props => props.fontSize};
  font-family: 'Noto Sans CJK JP';
  text-decoration: none;
`;

function LinkItem (props) {
  return (
    <StyledLinkItem {...props}>{props.children}</StyledLinkItem>
  )
}

export default LinkItem;
