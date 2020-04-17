import React from 'react';
import styled from 'styled-components';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import { Link } from 'react-router-dom';
import LinkItem from '../../LinkItem';
import ExternalLinkItem from '../../ExternalLinkItem';
import RoundLogo from '../../RoundLogo';
import Logo from '../../Logo';
import { DIGITAL_MARCH_URL } from '../../../constants';

const StyledFooterMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  & * {
    margin-top: 7px;
  }
`;

const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 8.4px;
  }
`;

const StyledLinkItemsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & a {
    margin-left: 30px;
  }
  & svg {
    margin-left: 41px;
  }
`;

const StyledLinkItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTwitterIcon = styled(Twitter)`
  width: ${props => props.width || '27px'};
  color: ${props => props.color || props.theme.textColor};
`;

const StyledFacebookIcon = styled(FacebookSquare)`
  width: ${props => props.width || '25px'};
  color: ${props => props.color || props.theme.textColor};
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  & :not(:first-child) {
    margin-left: 15px;
  }
`;

const LinkWrapper = styled.a``;

function FooterMobile (props) {
  const roundLogoWidth = '21x';
  const fontSize = '15px';
  const logoWidth = '161.7px';

  return (
    <StyledFooterMobile>
      <Link to='/'>
        <StyledLogos>
          <RoundLogo width={roundLogoWidth}/>
          <Logo width={logoWidth}/>
        </StyledLogos>
      </Link>
      <StyledLinkItemsColumn>
          <LinkItem fontSize={fontSize} to='/about-us'>About Us</LinkItem>
          <LinkItem fontSize={fontSize} to='/faq'>FAQ</LinkItem>
          <LinkItem fontSize={fontSize} to='/approach-to-governments'>行政・政治へのアプローチ</LinkItem>
          <LinkItem fontSize={fontSize} to='/to-organize-form'>オーガナイズする</LinkItem>
          <ExternalLinkItem fontSize={fontSize} href={DIGITAL_MARCH_URL} target='_blank'>アクションに参加する</ExternalLinkItem>
          <LinkItem fontSize={fontSize} to='/privacy-policy'>プライバシーポリシー</LinkItem>
      </StyledLinkItemsColumn>
      <SocialsContainer>
        <LinkWrapper href='https://twitter.com/FridaysJapan' target='_blank'><StyledTwitterIcon/></LinkWrapper>
        <LinkWrapper href='https://www.facebook.com/fridaysforfuture.jp/' target='_blank'><StyledFacebookIcon/></LinkWrapper>
      </SocialsContainer>
    </StyledFooterMobile>
  )
}

export default FooterMobile;
