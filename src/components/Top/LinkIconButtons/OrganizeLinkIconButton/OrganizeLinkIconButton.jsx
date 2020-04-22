import React from 'react';
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils';
import LinkIconButton from '../../../LinkIconButton';
import iconSrcWebp from './organize.webp';
import iconSrc from './organize.png';
import textImageSrcWebp from './organize-text.webp';
import textImageSrc from './organize-text.png';
import { withTheme } from 'styled-components';

function OrganizeLinkIconButton (props) {
  const webpIsSupported = isWebpSupported();
  return <LinkIconButton
    href='/to-organize-form'
    backgroundColor={props.theme.blue}
    iconSrc={webpIsSupported ? iconSrcWebp : iconSrc}
    textImageSrc={webpIsSupported ? textImageSrcWebp : textImageSrc}
    text='オーガナイズする'
  />
}

export default withTheme(OrganizeLinkIconButton);
