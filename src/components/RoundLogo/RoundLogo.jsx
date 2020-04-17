import React from 'react';
import styled from 'styled-components'
import logo from './fffjapan_logo.webp';
import media from "styled-media-query";

const StyledRoundLogo = styled.img`
  width: ${props => props.width};
  height: auto;
`;

function RoundLogo (props) {
  return <StyledRoundLogo src={logo} width={props.width}/>
}

export default RoundLogo;
