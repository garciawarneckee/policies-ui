import styled from 'styled-components';

export const PrimaryButton = styled.button`
width: 100%;
border: solid 2px #BB3A3A;
background: #BB3A3A;
color: #fff;
min-height: 40px;
cursor: pointer;
font-weight: bold;
text-transform: uppercase;
&:disabled {
  background-color: white;
  border-color: #BBB;
  color: #BBB;
}`;