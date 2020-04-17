import React from 'react';
import styled from 'styled-components'
import LinkIconButton from '../../../LinkIconButton';
import iconSrc from './about-us.webp';
import textImageSrc from './about-us-text.webp';
import { withTheme } from 'styled-components';

function AboutUsLinkIconButton (props) {
  return <LinkIconButton
    href='/about-us'
    backgroundColor={props.theme.green}
    iconSrc={iconSrc}
    textImageSrc={textImageSrc}
    text='私たちについて'
  />
}

export default withTheme(AboutUsLinkIconButton);
