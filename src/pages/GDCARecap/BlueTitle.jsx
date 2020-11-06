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
`

const StyledText = styled(Text)
`
  color: ${props => props.theme.blue};
  font-size: 22px;
  ${media.lessThan('medium')`
    font-size: 16px;
    `}
`

const Shoes = styled.img
`
  width: 60px;
  margin-right: 10px;
`

function BlueTitle (props) {
  const { withShoes, text } = props
  return (
    <StyledBlueTitle>
      <Shoes src={shoes3} />
      <StyledText bold>{text}</StyledText>
    </StyledBlueTitle>
  )
}

export default BlueTitle
