import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'

const Container = styled.div
`
  width: 100%;
  text-align: center;
`

const StyledGreenButton = styled.button
`
  padding: 20px 55px;
  ${media.lessThan('medium')`
    padding: 10px 30px;
  `}
  background-color: #96F564;
  border: 0px;
`

const StyledText = styled(Text)
`
  color: #0738C3;
  text-decoration: underline;
  font-size: 20px;
  ${media.lessThan('medium')`
    font-size: 14px;
  `}
`

function GreenButtonWithContainer (props) {
  const { text, href } = props
  return (
    <Container>
      <StyledGreenButton>
        <StyledText bold>{text}</StyledText>
      </StyledGreenButton>
    </Container>
    
  )
}


export default GreenButtonWithContainer
