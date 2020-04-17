import React from 'react';
import styled from 'styled-components'
import logo from './fffjapan.webp';
import media from "styled-media-query";

const StyledLogo = styled.img`
  width: ${props => props.width};
  height: auto;
`;

function Logo (props) {
  return <StyledLogo src={logo} width={props.width}/>
}

export default Logo;
