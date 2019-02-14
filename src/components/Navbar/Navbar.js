import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getloggedUserData } from '../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {

	componentDidMount() {
		this.props.getUserData();
	}

	render() {
		const navigation = (this.props.user) ?
			<NavContainer>
				<UnorderdedList className="navigation">
					<ListItem><Link className="link" to="/home">Home</Link></ListItem>
					<ListItem><Link className="link" to="/policies">Policies</Link></ListItem>
					<ListItem><Link className="link" to="/clients">Clients</Link></ListItem>
				</UnorderdedList>
				<Profile>
					<ProfileIcon icon={faUser} />
					<UserData>{this.props.user.name}</UserData>
				</Profile>
				<LogoutIcon icon={faPowerOff} />
			</NavContainer> : null;

		return (navigation)
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user
});

const mapDispatchToProps = (dispatch) => ({
	getUserData: () => { dispatch(getloggedUserData()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const NavContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-end;
	align-items: center;
	padding: 0em 2em;
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
		color: #DC7633;
	}
`;

const Profile = styled.div`
	padding-left: 3em;
	padding-right: 1em;
`;

const UserData = styled.span`
	color: #DC7633;
	font-weight: bold;
`;

 const ProfileIcon = styled(FontAwesomeIcon)`
	color: #DC7633;
	margin-right: .5em;
 `;
 const LogoutIcon = styled(FontAwesomeIcon)`
	color: #C0392B;

	&:hover {
		cursor: pointer;
	}
 `;