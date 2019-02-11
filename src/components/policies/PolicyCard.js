import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  border: 1px black solid;
  border-radius: 4px;
  padding: 1em;
  margin: 1em;
`;

const KeyText = styled.span`
  font-weight: bold;
`;

const ValueText = styled.span`
  color: #2E2E2E;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 1em 0em;
`;


const PolicyCard = ({id, email, amountInsured, installmentPayment, inceptionDate }) => (
    <Row>
      <ValueText>{id}</ValueText>
      <ValueText>€{amountInsured}</ValueText>
      <ValueText>{installmentPayment}</ValueText>
      <ValueText>{inceptionDate}</ValueText>
    </Row>
)

PolicyCard.propTypes = {
  email: PropTypes.string.isRequired,
  amountInsured: PropTypes.number.isRequired
}

export default PolicyCard;