import React, { Component } from 'react';
import styled from 'styled-components';

export default class Pager extends Component {

	render() {
		const { total, showedElements, elementsInPage, pageSize } = this.props;
		const remaining = total - elementsInPage - showedElements;

		const pager = (showedElements + elementsInPage < total) ?
			(<PagerContainer>
				<OutlinedButton onClick={this.props.onClick}>
					Show {pageSize} more of {remaining} remaining
				</OutlinedButton>
			</PagerContainer>) : null;

		return (pager)
	}
}

const PagerContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 2em 0em;
`;

const OutlinedButton = styled.button`
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