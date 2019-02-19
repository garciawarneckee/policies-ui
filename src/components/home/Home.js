import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Section, Row, PageContainer } from '../common/Containers';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
	PageTitle,
	PageSubtitle,
	SectionTitle
} from '../common/Paragraphs';

class Home extends Component {

	render() {
		const user = this.props.user;
		const home = (user) ? (
			<PageContainer>
				<PageTitleContainer>
					<PageTitle>Welcome {user.name}!</PageTitle>
					<PageSubtitle>In the first journey get update with the last news of this application.</PageSubtitle>
				</PageTitleContainer>
				<Row>
					<Section>
						<SectionTitleRow>
							<SectionTitle>Current features</SectionTitle>
							<CircleOk icon={faCheckCircle}></CircleOk>
						</SectionTitleRow>
						<UnorderdedList>
							<ListItem>View your own policies</ListItem>
							<ListItem>Search a specific client information by his name or identification</ListItem>
						</UnorderdedList>
					</Section>
					<Section>
						<SectionTitleRow>
							<SectionTitle>Incomming features</SectionTitle>
							<CircleTime icon={faClock}></CircleTime>
						</SectionTitleRow>
						<UnorderdedList>
							<ListItem>Make reports of policies.</ListItem>
							<ListItem>View another user policies.</ListItem>
							<ListItem>Change user payment status.</ListItem>
						</UnorderdedList>
					</Section>
				</Row>
			</PageContainer>
		) : (<FontAwesomeIcon icon={faSpinner} pulse />);

		return home;
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user
});

export default connect(mapStateToProps)(Home);


const PageTitleContainer = styled.div`
	margin-left: .5em;
`;

const GenericIcon = styled(FontAwesomeIcon)`
	height: 2em !important;
	width: 2em !important;
	margin-left: 1em;
`;

const CircleOk = styled(GenericIcon)`
	color: #2ECC71;
`;

const CircleTime = styled(GenericIcon)`
	color: #5D6D7E;
`;

const SectionTitleRow = styled(Row)`
	align-items: center;
	justify-content: flex-start;
`;

const UnorderdedList = styled.ul`
	list-style-type: none;
`;

const ListItem = styled.li`
	margin: .5em 0em;
`;