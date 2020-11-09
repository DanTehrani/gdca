import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'
import Text from '../../components/Text'

const StyledNewsPickUp = styled.div
`
  text-align: left;
  padding: 10px 0;
`

const StyledText = styled(Text)
`
  color: ${props => props.theme.blue};
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  font-size: 20px;
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
`

const StyledTextSmall = styled(StyledText)
`
  font-size: 16px;
  ${media.lessThan('medium')`
    font-size: 13px;
  `}
`


function NewsPickUp (props) {
  const { text, by, url } = props
  return (
    <StyledNewsPickUp>
      <a href={url} target='_blank'>
        <StyledText underline bold>{text}</StyledText> <br />
      </a>
      <StyledTextSmall bold>{by}</StyledTextSmall>
    </StyledNewsPickUp>
  )
}

export default NewsPickUp
