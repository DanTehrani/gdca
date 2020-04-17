import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopLargeImage from '../components/Top/LargeImage'
import styled from 'styled-components';
import Page from '../components/Page';

const TopLargeImageContainer = styled.div`
  margin-top: 40px;
`;

const FooterContainer = styled.div`
  margin-top: 84px;
`;

function Top () {
  return (
    <Page>
      <Header />
      <TopLargeImageContainer>
        <TopLargeImage />
      </TopLargeImageContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Page>
  )
}

export default Top;
