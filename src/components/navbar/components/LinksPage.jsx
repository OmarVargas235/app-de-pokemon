import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
	.navbar__color--link {
		color: rgba(254, 254, 254, .6);
	}

	.navbar__link--active {
		color: rgb(254, 254, 254);
	}
`;

const LinksPage = () => (
	<Ul className="navbar-nav d-flex flex-grow-1">
		<li className="nav-item my-3 my-md-0 ml-md-5">
			<NavLink 
				to='/pokemon/home' 
				activeClassName="navbar__link--active"
				className="navbar__color--link"
			>Start</NavLink>
		</li>
	
		<li className="nav-item mb-3 mb-md-0 ml-md-3">
			<NavLink 
				to='/pokemon/favorites' 
				activeClassName="navbar__link--active"
				className="navbar__color--link"
			>Favorites</NavLink>
		</li>
	
		<li className="nav-item mb-3 mb-md-0 ml-md-3">
			<NavLink 
				to='/pokemon/comparisons' 
				activeClassName="navbar__link--active"
				className="navbar__color--link"
			>Comparisons</NavLink>
		</li>
	</Ul>
)

export default LinksPage;