import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from './HomePage';
import { getPokemonsActions } from '../../redux/actions/getPokemonsActions';
import { getPokemonClearActions } from '../../redux/actions/getPokemonActions';

const Home = ({ data, getPokemonsActions, getPokemonClearActions }) => {

	useEffect(() => {
		getPokemonsActions();
		getPokemonClearActions();

	}, [getPokemonsActions, getPokemonClearActions]);

	return (
		<HomePage 
			data={data}
		/>
	)
}

Home.propTypes = {
	data: PropTypes.object,
	getPokemonsActions: PropTypes.func,
	getPokemonClearActions: PropTypes.func,
}

Home.defaultProps = {
	data: {},
}

const mapStateToProps = state => ({
	data: state.getPokemonsReducer
})

const mapDispatchToProps = {
	getPokemonsActions,
	getPokemonClearActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);