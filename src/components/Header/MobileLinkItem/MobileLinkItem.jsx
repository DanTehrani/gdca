import React from 'react';
import LinkItem from '../../LinkItem';

function MobileLinkItem(props) {
  return (
    <LinkItem backgroundColor='#fff' {...props}>{props.children}</LinkItem>
  )
}

export default MobileLinkItem;
