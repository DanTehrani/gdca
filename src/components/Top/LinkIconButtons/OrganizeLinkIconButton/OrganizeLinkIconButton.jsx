import React from 'react';
import styled from 'styled-components'
import LinkIconButton from '../../../LinkIconButton';
import iconSrc from './organize.webp';
import textImageSrc from './organize-text.webp';
import { withTheme } from 'styled-components';

function OrganizeLinkIconButton (props) {
  return <LinkIconButton
    href='/to-organize-form'
    backgroundColor={props.theme.blue}
    iconSrc={iconSrc}
    textImageSrc={textImageSrc}
    text='オーガナイズする'
  />
}

export default withTheme(OrganizeLinkIconButton);
