import React from 'react';
import styled from 'styled-components';
import img from './climate-justice-now-text-image.webp';

const StyledTextImage = styled.img`
  width: ${props => props.width || '7.75em'};
`;

function TextImage (props) {
  return <StyledTextImage src={img} />
}

export default TextImage;
