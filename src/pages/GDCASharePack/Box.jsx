import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from '../../components/Text'

const StyledBox = styled.div
`
  background-color: ${props => props.theme.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  ${media.greaterThan('medium')`
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 1em 150px;
  `};
`

const ImageContainer = styled.div
`
  margin: 20px 0;
  ${media.greaterThan('medium')`
    margin: 0;
  `};
  width: 300px;
  text-align: center;
`

const Image = styled.img
`
  width: ${props => props.imgWidth || '100px'};
  height: auto;
`

const TitleContainer = styled.div
`
  margin: 10px 0;
  ${media.greaterThan('medium')`
    margin: 0;
  `};
`

const Title = styled(Text)
`
  color: #000;
  font-size: 1.5em;
`

const TextContainer = styled.div
`
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
  padding: 0 10px;
  ${media.greaterThan('medium')`
    width: 450px;
  `};
`

const StyledText = styled(Text)
`
  color: #000;
  font-size: 14px;
`


function Box (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 767px)' })
  const { imgSrc, imgWidth, text, title } = props
  return (
    <StyledBox>
      <TextContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <StyledText>{text}</StyledText>
      </TextContainer>
      <ImageContainer >
        <Image src={imgSrc} imgWidth={imgWidth}/>
      </ImageContainer>
    </StyledBox>
  )
}

export default Box
