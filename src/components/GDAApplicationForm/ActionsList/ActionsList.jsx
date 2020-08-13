import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useMediaQuery } from 'react-responsive'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Container = styled.div
`
  overflow-x: scroll;
`

const StyledTable = styled(Table)
`
  padding: 0 20px;
  ${
    media.greaterThan('medium')`
      padding: 0 100px;
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
  min-width: 100px;
`

function ActionsList () {
  const rows = [
    {
      time: '全日',
      actionTitle: 'つなげ地球愛！お家アクションキャンペーン(4.24 Online Strike)',
      org: 'FFF Osaka',
    },
    {
      time: '全日',
      actionTitle: 'グローバル気候マーチ 太宰府宣言',
      org: 'FFF Dazaifu',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    },
    {
      time: '全日',
      actionTitle: '企画企画企画',
      org: '主催主催主催',
    }
  ]
  
  return (
    <Container>
    <StyledTable>
      <TableHead>
        <TableRow>
          <StyledTableCellTime>時間</StyledTableCellTime>
          <StyledTableCellActionTitle>企画</StyledTableCellActionTitle>
          <StyledTableCellOrg>主催</StyledTableCellOrg>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          rows.map((row, i) => (
            <TableRow key={i}>
              <StyledTableCellTime>{row.time}</StyledTableCellTime>
              <StyledTableCellActionTitle>{row.actionTitle}</StyledTableCellActionTitle>
              <StyledTableCellOrg>{row.org}</StyledTableCellOrg>
            </TableRow>
          ))
        }
      </TableBody>
    </StyledTable>
    </Container>
    )
}

export default ActionsList;