import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonsToComparePage from '../components/PokemonsToComparePage';

const PokemonsToCompare = props => {

	const { pokemonStats, addPokemon, addPokemonStats, setAddPokemonStats, setAddPokemon } = props;
	
	useEffect(() => {
		/*
			Este condicional se encarga de que las estadisticas del primer objeto del 
			array 'addPokemonStats', no esten vacias, para despues ir agregando el resto.
		*/
		(addPokemon.length > 0 && pokemonStats.length > 0)
		&& setAddPokemonStats([
			...addPokemonStats, 
			{name: `${addPokemon[addPokemon.length - 1].name}` , data: pokemonStats}
		]);
	}, [pokemonStats]);

	const deletePokemonAndStats = el => {
		const copyAddPokemon = addPokemon;
		const copyAddPokemonStats = addPokemonStats;
		const index = addPokemon.findIndex( e => e.id === el.id);

		copyAddPokemon.splice(index, 1);
		copyAddPokemonStats.splice(index, 1);
		
		setAddPokemon([...copyAddPokemon]);
		setAddPokemonStats([...copyAddPokemonStats]);
	}

	return (
		<PokemonsToComparePage 
			addPokemon={addPokemon}
			deletePokemonAndStats={deletePokemonAndStats}
		/>
	)
}

PokemonsToCompare.propTypes = {
	pokemonStats: PropTypes.array,
	addPokemon: PropTypes.array,
	addPokemonStats: PropTypes.array,
	setAddPokemon: PropTypes.func,
	setAddPokemonStats: PropTypes.func,
}

PokemonsToCompare.defaultProps = {
	pokemonStats: [],
	addPokemon: [],
	addPokemonStats: [],
}

const mapStateToProps = state => ({
	pokemonStats: state.getPokemonReducer.pokemonSearch.stats === undefined ? []
	: state.getPokemonReducer.pokemonSearch.stats,
});

export default connect(mapStateToProps)(PokemonsToCompare);