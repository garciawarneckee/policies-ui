import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultContainer, Section, Row, PageContainer } from '../common/Containers';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
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
				<PageTitle>Welcome {user.name}!</PageTitle>
				<PageSubtitle>In the first journey get update with the last news of this application.</PageSubtitle>
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
				) : null;
		
				return home;
			}
		}
		
const mapStateToProps = (state) => ({
					user: state.user.user
});
			
export default connect(mapStateToProps)(Home);
			
const CircleOk = styled(FontAwesomeIcon)`
	color: #2ECC71;
	height: 2em !important;
	width: 2em !important;
	margin-left: 1em;
`;

const CircleTime = styled(FontAwesomeIcon)`
	color: #5D6D7E;
	height: 2em !important;
	width: 2em !important;
	margin-left: 1em;
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