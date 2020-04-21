import React from 'react';
import styled from 'styled-components';
import FloatingImage from '../../FloatingImage';
import img from './faq-text.webp';

function FloatingFAQImage (props) {
  return <FloatingImage src={img} width='6.31em' {...props}/>
}

export default FloatingFAQImage;
