import React from 'react';
import styled from 'styled-components';
import img from './organize-large.webp';

const StyledLargeImage = styled.img`
  width: ${props => props.width || '39.875em'};
`;

function LargeImage (props) {
  return (
    <StyledLargeImage {...props} src={img} />
  )
}

export default LargeImage;
