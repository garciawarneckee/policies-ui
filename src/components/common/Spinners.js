import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import { primaryColor } from './style-constants';

const SpinnerXL = styled(FontAwesomeIcon)`
  font-size: 5em; 
  color: ${ primaryColor };
`;

const SpinnerM = styled(FontAwesomeIcon)`
  font-size: 3em; 
  color: ${ primaryColor };
`;

const SpinnerS = styled(FontAwesomeIcon)`
  font-size: 2em; 
  color: ${ primaryColor };
`;

export const LargeSpinner = (props) => (<SpinnerXL icon={faSpinner} pulse />);
export const MediumSpinner = (props) => (<SpinnerM icon={faSpinner} pulse />);
export const SmallSpinner = (props) => (<SpinnerS icon={faSpinner} pulse />);
