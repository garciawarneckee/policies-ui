import React from 'react';
import PropTypes from 'prop-types';
import './PolicyCard.scss';

const PolicyCard = ({ email, amountInsured }) => (
  <div className="policy-container">
    <p>{ email }</p>
    <p>{ amountInsured }</p>
  </div>
)

PolicyCard.propTypes = {
  email: PropTypes.string.isRequired,
  amountInsured: PropTypes.number.isRequired
}

export default PolicyCard;