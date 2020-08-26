import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../layauts/Title';
import CardPokemon from '../../layauts/CardPokemon';
import Alert from '../../layauts/Alert';
//rillaboom
const PokemonSearchPage = ({ data }) => (
	<div className="mt-5">
		<Title 
			title='Search results'
		/>
		
		{ 
			data.pokemonSearch.id > 807 
			? <Alert mesagge='No pokemon were found with this search, try something else' /> 
			: <CardPokemon pokemon={data.pokemonSearch} /> 
		}
	</div>
)

PokemonSearchPage.propTypes = {
	data: PropTypes.object,
}

PokemonSearchPage.defaultProps = {
	data: {},
}

export default PokemonSearchPage;