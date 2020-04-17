import React from 'react';
import styled from 'styled-components'
import LinkIconButton from '../../../LinkIconButton';
import iconSrc from './join-us.webp';
import textImageSrc from './join-us-text.webp';
import { withTheme } from 'styled-components';
import { DIGITAL_MARCH_URL } from '../../../../constants';

function JoinUsLinkIconButton (props) {
  return <LinkIconButton
    href={DIGITAL_MARCH_URL}
    backgroundColor={props.theme.red}
    iconSrc={iconSrc}
    textImageSrc={textImageSrc}
    text='アクションに参加する'
  />
}

export default withTheme(JoinUsLinkIconButton);
