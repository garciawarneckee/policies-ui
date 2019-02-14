import styled from 'styled-components';

export const PrimaryButton = styled.button`
width: 100%;
border: solid 2px #154360;
background: #154360;
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

export const OutlinedButton = styled.button`
	border: 0px;
	background-color: white;
	font-family: Roboto;
	font-size: 16px;
	font-weight: bold;

	&:hover { 
		cursor: pointer;
	}

	&:focus {
		outline: 0;
	}
`;