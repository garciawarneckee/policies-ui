import styled from 'styled-components';
import {
	primaryColor,
	white,
	cursorPointer,
	boldWeightFont,
	disabledColor,
	fontFamily,
} from './style-constants';


export const PrimaryButton = styled.button`
width: 100%;
border: solid 2px ${primaryColor};
background: ${primaryColor};
color: ${white};
min-height: 40px;
${cursorPointer}
${boldWeightFont}
text-transform: uppercase;
&:disabled {
  background-color: ${white};
  border-color: ${disabledColor};
  color: ${disabledColor};
}`;

export const OutlinedButton = styled.button`
	border: 0px;
	background-color: ${white};
	${fontFamily}
	font-size: 16px;
	${boldWeightFont}

	&:hover {  ${cursorPointer} }
	&:focus { outline: 0; }
`;