import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getloggedUserData, logout } from '../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { OutlinedButton } from '../common/Buttons';
import { 
	primaryColor, 
	cursorPointer, 
	boldWeightFont, 
	dangerColor } 
	from '../common/style-constants';

class Navbar extends Component {

	componentDidMount() {
		this.props.getUserData();
	}

	render() {
		const user = this.props.user;
		const navigation = (this.props.user) ?
			<NavContainer>
				<UnorderdedList className="navigation">
				<ListItem><Link className="link" to="/home">Home</Link></ListItem>
				{ (user.role === 'admin') ?	<ListItem><Link className="link" to="/policies">Policies</Link></ListItem> : null }
				{ (user.role ==='admin' || user.role === 'user') ? <ListItem><Link className="link" to="/clients">Clients</Link></ListItem> : null }
				</UnorderdedList>
				<Profile>
					<ProfileIcon icon={faUser} />
					<UserData>{this.props.user.name}</UserData>
				</Profile>
				<OutlinedButton onClick={this.props.logout}>
					<LogoutIcon icon={faPowerOff} />
				</OutlinedButton>
			</NavContainer> : null;

		return (navigation)
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user
});

const mapDispatchToProps = (dispatch) => ({
	getUserData: () => { dispatch(getloggedUserData()) },
	logout: () => { dispatch(logout()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const NavContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-end;
	align-items: center;
	padding: 0em 1em;
	min-height: 3em;
`;

const UnorderdedList = styled.ul`
	display: inherit;
	flex-direction: row;
	
	list-style: none;

	& .link { 
  	padding: 1em; 
  	font-weight: bold;
  	color: black;
	} 

	& a { 
  	text-align: center;
  	text-decoration: none; 
	}

	@media all and (max-width: 800px) { 
		justify-content: space-around;
	}

	@media all and (max-width: 500px) {
		flex-direction: column;
	}
`;

const ListItem = styled.li`
	&:active {
		color: ${primaryColor};
	}
`;

const Profile = styled.div`
	padding-left: 3em;
	padding-right: 1em;
`;

const UserData = styled.span`
	color: ${primaryColor};
	${boldWeightFont}
`;

const ProfileIcon = styled(FontAwesomeIcon)`
	color: ${primaryColor};
	margin-right: .5em;
 `;

const LogoutIcon = styled(FontAwesomeIcon)`
	color: ${dangerColor};
	&:hover { ${cursorPointer} }
	`;