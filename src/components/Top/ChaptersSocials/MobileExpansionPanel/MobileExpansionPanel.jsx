import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Collapse from '@material-ui/core/Collapse';
import Text from '../../../Text';
import TwitterIconButton from '../../../SocialIconButtons/TwitterIconButton';
import FacebookIconButton from '../../../SocialIconButtons/FacebookIconButton';
import InstagramIconButton from '../../../SocialIconButtons/InstagramIconButton';

const StyledMobileExpansionPanel = styled.div`
  background-color: ${props => props.theme.beige};
`;

const StyledChapterName = styled(Text)`
  font-size: 16px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

const SocialsContainer = styled.div`
  margin-top: 0.4em;
  & :not(:first-child) {
    margin-left: 1em;
  }
`;

function MobileExpansionPanel (props) {
  const { twitter, facebook, instagram, onClick, showSocials } = props;
  const { i18n } = useTranslation();
  const name = i18n.language === 'en' ? props.name_en : props.name_ja;

  const twitterURL = `https://twitter.com/${twitter}`;
  const facebookURL = `https://facebook.com/${facebook}`;
  const instagramURL = `https://instagram.com/${instagram}`;

  return (
    <StyledMobileExpansionPanel>
      <StyledChapterName onClick={onClick}>{name}</StyledChapterName>
      <Collapse in={showSocials}>
        <SocialsContainer>
          {twitter && <TwitterIconButton width='32px' onClick={() => {window.open(twitterURL)}}/>}
          {facebook && <FacebookIconButton width='32px' onClick={() => {window.open(facebookURL)}}/>}
          {instagram && <InstagramIconButton width='32px' onClick={() => {window.open(instagramURL)}}/>}
        </SocialsContainer>
      </Collapse>
    </StyledMobileExpansionPanel>
  )
}

export default MobileExpansionPanel;