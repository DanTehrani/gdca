import React from 'react';
import styled from 'styled-components'
import topImg from './top-image.webp';

const StyledLargeImage = styled.img`
  width: 1200px;
  height: auto;
`;

function LargeImage (props) {
  return (
    <StyledLargeImage src={topImg} />
  )
}

export default LargeImage;
