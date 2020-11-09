import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'
import shoes3 from './shoes3.png'

const StyledBlueTitle = styled.div
`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.ceterText ? 'center' : 'left'};
`

const StyledText = styled(Text)
`
  color: ${props => props.theme.blue};
  font-size: 24px;
  ${media.lessThan('medium')`
    font-size: 16px;
    `}
`

const Shoes = styled.img
`
  width: 60px;
  margin-right: 10px;
  ${media.lessThan('medium')`
    width: 40px;
    `}
`

function BlueTitle (props) {
  const { withShoes, ceterText, text } = props
  return (
    <StyledBlueTitle ceterText>
      { withShoes && <Shoes src={shoes3} /> }
      <StyledText bold>{text}</StyledText>
    </StyledBlueTitle>
  )
}

export default BlueTitle
