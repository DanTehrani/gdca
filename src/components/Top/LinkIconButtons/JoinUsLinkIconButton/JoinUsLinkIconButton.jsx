import React from 'react';
import styled from 'styled-components'
import { isWebpSupported } from 'react-image-webp/dist/utils';
import LinkIconButton from '../../../LinkIconButton';
import iconSrcWebp from './join-us.webp';
import iconSrc from './join-us.png';
import textImageSrcWebp from './join-us-text.webp';
import textImageSrc from './join-us-text.png';
import { withTheme } from 'styled-components';
import { DIGITAL_MARCH_URL } from '../../../../constants';

function JoinUsLinkIconButton (props) {
  const webpIsSupported = isWebpSupported();
  return <LinkIconButton
    href={DIGITAL_MARCH_URL}
    backgroundColor={props.theme.red}
    iconSrc={webpIsSupported ? iconSrcWebp: iconSrc}
    textImageSrc={webpIsSupported ? textImageSrcWebp : textImageSrc}
    text='アクションに参加する'
  />
}

export default withTheme(JoinUsLinkIconButton);
