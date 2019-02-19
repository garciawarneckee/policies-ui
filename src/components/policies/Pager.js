import React, { Component } from 'react';
import styled from 'styled-components';
import { OutlinedButton } from '../common/Buttons';
import { SmallSpinner } from '../common/Spinners';
import { NoContentContainer } from '../common/Containers';

export default class Pager extends Component {

	render() {
		const { 
			total, 
			showedElements, 
			elementsInPage, 
			pageSize,
			isFetching 
		} = this.props;
		
		const remaining = total - elementsInPage - showedElements;

		const pager = (showedElements + elementsInPage < total) ?
			(<PagerContainer>
				<OutlinedButton onClick={this.props.onClick}>
					Show {pageSize} more of {remaining} remaining
				</OutlinedButton>
			</PagerContainer>) : null;

		return (isFetching) ? 
		(<SpinnerContainer>
			<SmallSpinner/>
		</SpinnerContainer>)
		: pager;
	}
}

const PagerContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 2em 0em;
`;

const SpinnerContainer = styled(NoContentContainer)`
	padding 1.5em 0em;
`


