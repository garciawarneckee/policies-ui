import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { getPolicies, cleanPolicies } from '../../actions';
import { DataTable, TableHeader, TableBody, CustomTd } from '../common/Table';
import Pager from './Pager';

class PolicyList extends Component {

  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPolicies(0, 10));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(cleanPolicies());
  }

  /**
   * Makes a request to get new policies with the next policy page.
   */
  onPageChange() {
    const { dispatch, startIndex, pageSize } = this.props;
    dispatch(getPolicies(startIndex + pageSize, pageSize));
  }

  render() {
    const { policies, elementsInPage, startIndex, total, pageSize } = this.props;
    return (
      <ListContainer>
        <ListTitle>Policies {elementsInPage + startIndex} of {total} </ListTitle>
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
        <Pager 
          total={total} 
          showedElements={startIndex} 
          elementsInPage={elementsInPage}
          pageSize={pageSize}
          onClick={this.onPageChange}
        />
      </ListContainer>
    )
  }
}

const mapStateToProps = state => ({
  policies: state.policies.policies,
  total: state.policies.total,
  startIndex: state.policies.startIndex, 
  pageSize: state.policies.pageSize,
  elementsInPage: state.policies.elementsInPage
});

export default connect(mapStateToProps)(PolicyList);

const ListContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px 0px;
  background-color: rgb(255, 255, 255);
  margin: 1em 1em;
  padding: 1em 1em;
`;

const ListTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;