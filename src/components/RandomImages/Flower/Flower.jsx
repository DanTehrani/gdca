import React from 'react';
import styled from 'styled-components';
import img from './flower.webp';

const StyledFlower = styled.img`
  width: 83.349px;
`;

function Flower (props) {
  return (
    <StyledFlower {...props} src={img}>{props.children}</StyledFlower>
  )
}

export default Flower;
