import React from "react"
import styled from "@emotion/styled"

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 2rem 0;

  th {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    white-space: nowrap;
  }
`

export interface IProps {
  children?: React.ReactNode
}

const MarkdownTable: React.FC<IProps> = ({ children }) => (
  <TableContainer>
    <table>{children}</table>
  </TableContainer>
)

export default MarkdownTable
