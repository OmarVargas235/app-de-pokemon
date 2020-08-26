import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBarPage from './NavbarPage';
import { getLocalStorageActions } from '../../redux/actions/localStorageActions';

const NavBar = ({ getLocalStorageActions }) => {
	
	/*Obtiene la data que hay en el localStorage, apenas carga la pagina.*/
	useEffect(() => getLocalStorageActions(), [getLocalStorageActions]);

	return (
		<NavBarPage />
	)
}

NavBar.propTypes = {
	getLocalStorageActions: PropTypes.func,
}

const mapDispatchToProps = {
	getLocalStorageActions
}

export default connect('', mapDispatchToProps)(NavBar);