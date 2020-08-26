import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import { ReactComponent as IconMenu } from '../../assets/img/menu.svg';
import LinksPage from './components/LinksPage';
import Search from './containers/Search';

const Nav = styled.nav`
	background-color: #D31027;
	font-size: 1.1rem;

	.navbar__logo {
		width: 72px;
		height: 40px;
	}

	.navbar-toggler {
		border: 1px solid white;
	}
`;

const NavBarPage = () => (
	<Nav className="navbar navbar-expand-md justify-content-between mb-5">
		<div className="nav-item navbar__logo">
			<NavLink to='/pokemon/home'>
				<img src={Logo} alt="logo" className="img-fluid" />
			</NavLink>
		</div>

		<button 
			className="navbar-toggler" 
			type="button" 
			data-toggle="collapse"
			data-target="#collapsibleNavbar"
		>
			<span className="navbar-toggler-icon"><IconMenu /></span>
		</button>

		<div className="collapse navbar-collapse" id="collapsibleNavbar">
			<LinksPage />
				
			<div className="nav-item">
				<Search />
			</div>
		</div>
	</Nav>
)

export default NavBarPage;