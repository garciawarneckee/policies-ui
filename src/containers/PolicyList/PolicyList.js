import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPolicies } from '../../actions/actionTypes';
import PolicyCard from '../../components/PolicyCard/PolicyCard';
import './PolicyList.scss';

class PolicyList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPolicies());
  }

  render() {
    const { policies } = this.props;
    return(
      <div className="policies-container">
        { policies.map(p => (<PolicyCard key={p.id} email={p.email} amountInsured={p.amountInsured} /> )) }
      </div>
    )
  }

}

function mapStateToProps(state) {
  const { policies } = state.policies;
  return { policies };
}

export default connect(mapStateToProps)(PolicyList);