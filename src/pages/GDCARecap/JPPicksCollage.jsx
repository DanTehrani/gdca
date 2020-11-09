import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import GreenButton from './GreenButton'
import collageImg from './collage.png'

const StyledCollage = styled.div
`
  background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('collage.png');
  background-size: 100%;
  background-repeat: no-repeat;
`

const ButtonContainer = styled.div
`
  padding: 250px 0;
  ${media.lessThan('medium')`
    padding: 60px 0;
  `}
`


function Collage () {
  return (
    <StyledCollage>
      <ButtonContainer>
        <GreenButton text='日本の写真' href='https://drive.google.com/drive/u/0/folders/1anF-EJYdKxKMHO-_DNPGtXbFmD5IUKYz' />
      </ButtonContainer>
    </StyledCollage>
  )
}

export default Collage
