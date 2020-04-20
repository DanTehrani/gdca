import React from 'react';
import styled from 'styled-components';
import FloatingImage from '../../FloatingImage';
import img from './about-us-text.webp';

function FloatingAboutUsImage (props) {
  return <FloatingImage src={img} width='9.81em' {...props}/>
}

export default FloatingAboutUsImage;
