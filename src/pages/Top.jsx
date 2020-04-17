import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopLargeImage from '../components/Top/LargeImage'
import styled from 'styled-components';
import media from 'styled-media-query';
import Page from '../components/Page';
import JoinTheActionButton from '../components/Top/JoinTheActionButton';
import MessageBanner from '../components/Top/MessageBanner';
import AboutUsLinkIconButton from '../components/Top/LinkIconButtons/AboutUsLinkIconButton';
import JoinUsLinkIconButton from '../components/Top/LinkIconButtons/JoinUsLinkIconButton';
import OrganizeLinkIconButton from '../components/Top/LinkIconButtons/OrganizeLinkIconButton';

const TopLargeImageContainer = styled.div`
  margin-top: 40px;
`;

const FooterContainer = styled.div`
  margin-top: 84px;
`;

const JoinTheActionButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 22px;
  margin-right: 2.09em;
  margin-top: -2.3em;
  ${media.lessThan('large')`
    font-size: 20px;
  `}
  ${media.lessThan('medium')`
    font-size: 20px;
  `}
  ${media.lessThan('small')`
    font-size: 8px;
  `}
`;

const MessageBannerContainer = styled.div`
  font-size: 42px;
  display: flex;
  justify-content: center;
  ${media.lessThan('large')`
    font-size: 35px;
  `}
  ${media.lessThan('medium')`
    font-size: 25px;
  `}
  ${media.lessThan('small')`
    font-size: 11px;
  `}
`;

const LinkIconButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 22px;
  margin-top: 1.97em;
  width: 100%;
  & > :not(:first-child) {
    margin-left: 1.59em;
  }
  ${media.lessThan('large')`
    font-size: 18px;
  `}
  ${media.lessThan('medium')`
    font-size: 13px;
  `}
  ${media.lessThan('small')`
    font-size: 6px;
  `}
`;

function Top () {
  return (
    <Page>
      <Header />
      <TopLargeImageContainer>
        <TopLargeImage />
      </TopLargeImageContainer>
      <JoinTheActionButtonContainer>
        <JoinTheActionButton zIndex={2}/>
      </JoinTheActionButtonContainer>
      <MessageBannerContainer>
        <MessageBanner />
      </MessageBannerContainer>
      <LinkIconButtonsContainer>
        <AboutUsLinkIconButton />
        <JoinUsLinkIconButton />
        <OrganizeLinkIconButton />
      </LinkIconButtonsContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Page>
  )
}

export default Top;
