import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import videoBackground from './video-background.png'

const VIDEO_URL = 'https://www.youtube.com/watch?v=peVuQzcNO2I'

const Container = styled.div
`
  background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('video-background.png');
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`


function Video () {
  return (
    <Container>
      <ReactPlayer 
        url={VIDEO_URL}
      />
    </Container>
  )
}

export default Video
