import React from 'react';
import styled from 'styled-components';
import img from './organize.webp';

const StyledImage = styled.img`
  width: 182.385px;
`;

function Organize (props) {
  return (
    <StyledImage {...props} src={img} />
  )
}

export default Organize;
