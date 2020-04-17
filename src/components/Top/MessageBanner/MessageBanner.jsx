import React from 'react';
import styled from 'styled-components';
import holdingBannerImage1 from './holding-banner-1.webp';
import holdingBannerImage2 from './holding-banner-2.webp';

const StyledMessageBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StyledMessage = styled.span`
  display: inline-block;
  text-align: center;
  border: solid 0.17em;
  border-color: ${props => props.theme.textColor};
  color: ${props => props.theme.textColor || props.color};
  font-size: 1em;
  font-family: ${props => props.theme.fontFamilyBold};
  padding: 0.73em 1.09em;
  margin-top: 1.66em;
`;

const StyledHoldingBannerImage = styled.img`
  width: 6.29em;
  margin-right: -0.51em;
  z-index: 3;
`;

const StyledHoldingBannerImage2 = styled.img`
  width: 5.33em;
  margin-left: -0.51em;
  margin-top: 1.66em;
  z-index: 3;
`;

function MessageBanner () {
  return (
    <StyledMessageBanner>
      <StyledHoldingBannerImage src={holdingBannerImage1} />
      <StyledMessage>みんなで守る、みんなの未来</StyledMessage>
      <StyledHoldingBannerImage2 src={holdingBannerImage2} />
    </StyledMessageBanner>
  )
}

export default MessageBanner;
