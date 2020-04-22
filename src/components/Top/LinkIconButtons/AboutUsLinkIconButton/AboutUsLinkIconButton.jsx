import React from 'react';
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils';
import LinkIconButton from '../../../LinkIconButton';
import iconSrcWebp from './about-us.webp';
import iconSrc from './about-us.png';
import textImageSrcWebp from './about-us-text.webp';
import textImageSrc from './about-us-text.png';
import { withTheme } from 'styled-components';

function AboutUsLinkIconButton (props) {
  const webpIsSupported = isWebpSupported();
  return <LinkIconButton
    href='/about-us'
    backgroundColor={props.theme.green}
    iconSrc={webpIsSupported ? iconSrcWebp : iconSrc}
    textImageSrc={webpIsSupported ? textImageSrcWebp : textImageSrc}
    text='私たちについて'
  />
}

export default withTheme(AboutUsLinkIconButton);
