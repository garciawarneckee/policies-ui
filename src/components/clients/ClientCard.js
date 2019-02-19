import React, { Component } from 'react';
import styled from 'styled-components';
import { DefaultContainer } from '../../components/common/Containers';
import { SectionTitle } from '../../components/common/Paragraphs';

export default class ClientCard extends Component {

	render() {
		const client = this.props.client;
		return (
			<CardContainer>
				<CardRow>
					<SectionTitle>{client.name}'s information</SectionTitle>
				</CardRow>
				<CardRow>
					<b>Identification: </b> <span>{client.id}</span>
				</CardRow>
				<CardRow>
					<b>Email: </b> <span>{client.email}</span>
				</CardRow>
				<CardRow>
					<b>Role: </b> <span>{client.role}</span>
				</CardRow>
			</CardContainer>
		)
	}
}

const CardContainer = styled(DefaultContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 50%;
	height: auto;
  padding: 1em;
  margin: 1em;
`;

const CardRow = styled.div`
	display: inherit;
	flex-direction: row wrap;
	padding: .5em 0em;
`;