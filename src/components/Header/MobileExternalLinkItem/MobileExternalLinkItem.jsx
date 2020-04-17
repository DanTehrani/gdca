import React from 'react';
import styled from 'styled-components';
import ExternalLinkItem from '../../ExternalLinkItem';

const StyledMobileExternalLinkItem = styled(ExternalLinkItem)`
  background-color : #fff;
`;

function MobileExternalLinkItem (props) {
  return (
    <StyledMobileExternalLinkItem {...props}>{props.children}</StyledMobileExternalLinkItem>
  )
}

export default MobileExternalLinkItem;
