import React, { useState } from 'react';
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal';
import LinkItem from '../LinkItem';
import { Bars } from '@styled-icons/fa-solid/Bars';

const StyledBars = styled(Bars)`
  width: 20px;
  color: ${props => props.theme.textColor};
`;

const StyledLinkMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  & :not(:first-child) {
    margin-top: 22px;
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledWhiteCloseButton = styled.span`
  color: ${props => props.theme.textColor};
  background-color: #fff;
  font-size: ${props => props.fontSize};
  font-family: ${props => props.theme.fontFamily};
  display: inline-block;
`;

const StyledCloseButtonContainer = styled.div`
  margin-top: 22px;
`;

function LinkMenu (props) {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleBarsClick = () => {
    setMenuExpanded(true);
  }

  const handleClose = () => {
    setMenuExpanded(false);
  }

  const { fontSize } = props;

  return (
    <>
      <StyledBars onClick={handleBarsClick} />
      <StyledModal
        open={menuExpanded}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <StyledLinkMenu>
          {props.children}
          <StyledCloseButtonContainer>
            <StyledWhiteCloseButton fontSize={fontSize} onClick={handleClose}>閉じる</StyledWhiteCloseButton>
          </StyledCloseButtonContainer>
        </StyledLinkMenu>
      </StyledModal>
    </>
  )
}

export default LinkMenu;
