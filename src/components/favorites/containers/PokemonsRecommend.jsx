import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPokemonsRecommendedActions } from '../../../redux/actions/getPokemonsRecommendedActions';
import PokemonsRecommendPage from '../components/PokemonsRecommendPage';

const PokemonsRecommend = ({ pokemonRecommended, getPokemonsRecommendedActions }) => {
	
	/*Obtiene un array de 5 numeros aletorios ente 0-807*/
	useEffect(() => {
		const arrRandom = [];

		for (let i = 0; i < 5; i++) {
			const numRandom = Math.ceil(Math.random() * 807);
			arrRandom.push(numRandom);
		}
		
		getPokemonsRecommendedActions(arrRandom);

	}, [getPokemonsRecommendedActions]);

	return (
		<PokemonsRecommendPage 
			pokemonRecommended={pokemonRecommended}
		/>
	)
}

const mapStateToProps = state => ({
	pokemonRecommended: state.getPokemonsRecommendedReducer.pokemonsRecommended
});

const mapDispatchToProps = {
	getPokemonsRecommendedActions
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsRecommend);