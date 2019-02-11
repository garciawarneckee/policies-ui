import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getPolicies } from '../../actions/actionTypes';
import PoliciesHeader from './PolicyHeader';
import PolicyCard from './PolicyCard';


const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

class PolicyList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPolicies());
  }

  render() {
    const { policies } = this.props;
    const policyKeys = [ 'Identifier', 'Amount Insured', 'Installment Payment', 'Inception Date' ];
    const policiesList = policies.map(p => (<PolicyCard 
      key={p.id} 
      id={p.id}
      email={p.email} 
      amountInsured={p.amountInsured}  
      installmentPayment={p.installmentPayment}
      inceptionDate={p.inceptionDate} />  
    ));
    return (
      <div>
        <PoliciesHeader keys={policyKeys} />
        <ListContainer>
         { policiesList }
        </ListContainer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { policies } = state.policies;
  return { policies };
}

export default connect(mapStateToProps)(PolicyList);