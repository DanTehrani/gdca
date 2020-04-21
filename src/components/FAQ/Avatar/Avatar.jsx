import React from 'react';
import styled from 'styled-components';
import avatar1 from './avatar-1.webp';
import avatar2 from './avatar-2.webp';
import avatar3 from './avatar-3.webp';
import avatar4 from './avatar-4.webp';

const avatars = {
  1: avatar1,
  2: avatar2,
  3: avatar3,
  4: avatar4
}

const StyledAvatar = styled.img`
  width: 6.25em;
`;

function Avatar (props) {
  return (
    <StyledAvatar src={avatars[props.avatarType]}/>
  )
}

export default Avatar;
