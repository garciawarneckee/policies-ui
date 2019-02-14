import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { getPolicies } from '../../actions';
import { DataTable, TableHeader, TableBody, CustomTd } from '../common/Table';

const ListContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px 0px;
  background-color: rgb(255, 255, 255);
  margin: 2em 2em;
  padding: 1em 1em;
`;

const ListTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
`

class PolicyList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPolicies());
  }

  render() {
    const { policies } = this.props;
    return (
      <ListContainer>
        <ListTitle>Policies</ListTitle>
        <DataTable>
          <TableHeader>
            <tr>
              <th>Identifier</th>
              <th>Amount Insured</th>
              <th>Installment Payment</th>
              <th>Inception Date</th>
            </tr>
          </TableHeader>
          <TableBody>
            {policies && policies.map(p => (
              <tr key={p.id}>
                <CustomTd>{p.id}</CustomTd>
                <CustomTd>{p.amountInsured} €</CustomTd>
                <CustomTd>{p.installmentPayment.toString()}</CustomTd>
                <CustomTd> {moment(p.inceptionDate).format("DD/MM/YYYY")} </CustomTd>
              </tr>
            ))}
          </TableBody>
        </DataTable>
      </ListContainer>
    )
  }
}

function mapStateToProps(state) {
  const { policies } = state.policies;
  return { policies };
}

export default connect(mapStateToProps)(PolicyList);