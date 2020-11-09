import React from 'react'
import styled from 'styled-components'

const StyledDivider = styled.div
`
  background-color: ${props => props.theme.lime};
  height: 30px;
  width: 100%;
  margin-top: 20px;
`

function Divider () {
  return (
    <StyledDivider />
  )
}

export default Divider
