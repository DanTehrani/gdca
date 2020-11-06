import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'
import Text from '../../components/Text'

const StyledNewsPickUp = styled.div
``

const StyledText = styled(Text)
`
  color: ${props => props.theme.blue};
  font-size: 20px;
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
`


function NewsPickUp (props) {
  const { text, url } = props
  return (
    <StyledNewsPickUp>
      <a href={url}>
        <StyledText bold>{text}</StyledText>
      </a>
    </StyledNewsPickUp>
  )
}

export default NewsPickUp
