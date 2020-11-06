import React from 'react'
import media from 'styled-media-query'
import styled from 'styled-components'
import NewsPickUp from './NewsPickUp'
import Text from '../../components/Text'
import BlueTitle from './BlueTitle'

const StyledNewsPickUps = styled.div
`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
`

const Column2 = styled.div
`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`

const Column1 = styled(Column2)
`
  border-right: solid 1px;
  border-color: ${props => props.theme.blue};
`

const VerticalDivider = styled.div
`
  
`

const TitleContainer = styled.div
`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
  ${media.lessThan('medium')`
    margin-left: 10px;
  `}
`

const Title = styled(Text)
`
  color: ${props => props.theme.blue};
  font-size: 22px;
  ${media.lessThan('medium')`
    font-size: 16px;
  `}
`


const newsPickups = [
  {
    title: 'aaa',
    url: 'aaa'
  },
  {
    title: 'aaa',
    url: 'aaa'
  },
  {
    title: 'aaa',
    url: 'aaa'
  },
  {
    title: 'aaa',
    url: 'aaa'
  }
  
]

function NewsPickUps (props) {
  const { text, url } = props
  
  return (
    <>
    <TitleContainer>
      <BlueTitle withShoes text='ニュースピックアップ' />
    </TitleContainer>
    <StyledNewsPickUps>
      
        <Column1>
        {
          newsPickups.map((pickup, i) => 
            (newsPickups.length / 2) > i &&
              <NewsPickUp 
                text={pickup.title}
                url={pickup.url}
              />
          )
        }
        </Column1>
        <Column2>
        {
          newsPickups.map((pickup, i) => 
            (newsPickups.length / 2) < i &&
              <NewsPickUp 
                text={pickup.title}
                url={pickup.url}
              />
          )
        }
        </Column2>
    </StyledNewsPickUps>
    </>
  )
}

export default NewsPickUps
