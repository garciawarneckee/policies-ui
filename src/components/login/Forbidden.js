import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { PrimaryButton } from '../common/Buttons';
import { PageNoContentContainer } from '../common/Containers';
import { dangerColor } from '../common/style-constants';

const BanIcon = styled(FontAwesomeIcon)`
  color: ${dangerColor};
  font-size: 15em;
`;

const ForbiddenText = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-top: 2em;
`;

const HomeButton = styled(PrimaryButton)`
  padding: 1em 2em;
`;

export default class Forbidden extends Component {

	render() {
		return (
			<PageNoContentContainer>
				<BanIcon icon={faBan} />
				<ForbiddenText>You have not enough permissions to access to this page.</ForbiddenText>
				<Link to="/home">
					<HomeButton> Go back to home </HomeButton>
				</Link>
			</PageNoContentContainer>
		);
	}
}