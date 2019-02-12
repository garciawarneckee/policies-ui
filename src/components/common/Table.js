import styled from 'styled-components';
import { Table } from 'reactstrap';

export const DataTable = styled(Table)`
  th {
    font-size: 16px !important;
    font-weight: normal !important;
    font-style: normal !important;
    font-stretch: normal !important;
    line-height: 1.5 !important;
    letter-spacing: 0.2px !important;
    color: #FFF !important;
    border-top: 0 !important;
    padding 1em 0em;
  }

  td {
    font-size: 14px !important;
    font-style: normal !important;
    font-stretch: normal !important;
    letter-spacing: normal !important;
    line-height: 2.07 !important;
    border-bottom: solid 2px #cccccc;
    padding-top: 25px !important;
    padding-bottom: 25px !important;
  }

  border-spacing: 0;
  width: 100%;
  margin: 0 auto;
`;

export const TableHeader = styled.thead`
  background-color: #BB3A3A;
`;

export const TableBody = styled.tbody`
`;

export const CustomTd = styled.td`
  text-align: center;
`;