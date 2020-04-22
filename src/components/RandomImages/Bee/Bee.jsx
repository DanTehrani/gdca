import React from 'react';
import styled from 'styled-components';
import img from './bee.webp';

const StyledBee = styled.img`
  width: 102.816px;
`;

function Bee (props) {
  return (
    <StyledBee {...props} src={img}>{props.children}</StyledBee>
  )
}

export default Bee;
