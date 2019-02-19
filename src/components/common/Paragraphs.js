import styled from 'styled-components';
import {
	boldWeightFont,
	normalWeightFont,
	italicStyleFont,
	disabledColor
} from './style-constants';

export const PageTitle = styled.h1`
  font-size: 36px;
  ${boldWeightFont}
`;

export const PageSubtitle = styled.h2`
	font-size: 30px;
	${italicStyleFont}
	${normalWeightFont}
	color: ${disabledColor};
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  ${boldWeightFont}
`;

export const SectionSubtitle = styled.h2`
	font-size: 20px;
	${italicStyleFont}
	${normalWeightFont}
	color: ${disabledColor};
`;
