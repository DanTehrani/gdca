import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useMediaQuery } from 'react-responsive'
import Text from '../../Text'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import actionList from './action-list.js'
import actionListPatagoniaAndKeen from './action-list-patagonia-and-keen.js'

const Container = styled.div
`
  overflow-x: scroll;
`

const StyledTable = styled(Table)
`
  padding: 0 20px;
  ${
    media.greaterThan('medium')`
      padding: 0 10px;
    `
  }
  font-family: ${props => props.theme.fontFamilyLight};
`

const StyledTableCellTime = styled(TableCell)
`
  min-width: 30px;
`

const StyledTableCellActionTitle = styled(TableCell)
`
  min-width: 200px;
`

const StyledTableCellOrg = styled(TableCell)
`
  min-width: 80px;
`

const StyledTableCellPlace = styled(TableCell)
`
  min-width: 80px;
`

const StyledTableCellAction = styled(TableCell)
`
  min-width: 150px;
`


const StyledText = styled(Text)
`
  display: block;
  font-size: 0.8em;
  color: ${props => props.theme.black};
  margin: 1em 0;
`


function ActionsList () {
  return (
    <Container>
    <StyledTable>
      <TableHead>
        <TableRow>
          <StyledTableCellTime>時間</StyledTableCellTime>
          <StyledTableCellActionTitle>企画</StyledTableCellActionTitle>
          <StyledTableCellOrg>主催</StyledTableCellOrg>
          <StyledTableCellPlace>場所</StyledTableCellPlace>
          <StyledTableCellPlace>アクション種類</StyledTableCellPlace>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          actionList.map((row, i) => (
            <TableRow key={i}>
              <StyledTableCellTime>{row.time}</StyledTableCellTime>
              {
                row.eventPageURL?
                <StyledTableCellActionTitle><a href={row.eventPageURL} target="_blank">{row.actionTitle}</a></StyledTableCellActionTitle>
                :<StyledTableCellActionTitle>{row.actionTitle}</StyledTableCellActionTitle>
              }
              {
                row.orgURL?
                <StyledTableCellOrg><a href={row.orgURL} target="_blank">{row.org}</a></StyledTableCellOrg>
                :<StyledTableCellOrg>{row.org}</StyledTableCellOrg>
              }
              <StyledTableCellPlace>{row.place}</StyledTableCellPlace>
              <StyledTableCellAction>{row.action}</StyledTableCellAction>
            </TableRow>
          ))
        }
      </TableBody>
      </StyledTable>
      <StyledText bold>
        以下のアクションでは、コロナ禍における店舗の運営を鑑みて、
      申し訳ありませんがシューズの持ち込みをご遠慮いただいています。
      </StyledText>
      <StyledTable>
        <TableBody>
          {
            actionListPatagoniaAndKeen.map((row, i) => (
              <TableRow key={i}>
                <StyledTableCellTime>{row.time}</StyledTableCellTime>
                {
                  row.eventPageURL?
                  <StyledTableCellActionTitle><a href={row.eventPageURL} target="_blank">{row.actionTitle}</a></StyledTableCellActionTitle>
                  :<StyledTableCellActionTitle>{row.actionTitle}</StyledTableCellActionTitle>
                }
                {
                  row.orgURL?
                  <StyledTableCellOrg><a href={row.orgURL} target="_blank">{row.org}</a></StyledTableCellOrg>
                  :<StyledTableCellOrg>{row.org}</StyledTableCellOrg>
                }
                <StyledTableCellPlace>{row.place}</StyledTableCellPlace>
                <StyledTableCellAction>{row.action}</StyledTableCellAction>
              </TableRow>
            ))
          }
        </TableBody>
      </StyledTable>
    </Container>
    )
}

export default ActionsList;
