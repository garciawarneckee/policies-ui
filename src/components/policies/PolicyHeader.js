import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  widht: 100%;
  display: flex;
  flex-direction: row;
  background-color: #F34949;
  font-weight: bold;
  justify-content: space-evenly;
  padding: 1em;
`;

const PolicyHeader = ({ keys }) => (
  <HeaderContainer>
   { keys.map(k => <span>{k}</span>) } 
  </HeaderContainer>
);

export default PolicyHeader;