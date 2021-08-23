import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../../layauts/Spinner';
import CardPokemon from '../../../layauts/CardPokemon';

const PokemonsRecommendPage = ({ pokemonRecommended }) => (
	<React.Fragment>
		<h2 className="mt-5 mb-4">You might also be interested</h2>
		
		{
			pokemonRecommended.length === 0 ? <div style={{position: 'relative'}}><Spinner /></div>
			: <div className="row">
				{
					pokemonRecommended.map((pokemon, index) => (
						<CardPokemon
							key={index} 
							pokemon={pokemon}
						/>
					)) 
				}
			</div>
		}
	</React.Fragment>
)

PokemonsRecommendPage.propTypes = {
	pokemonRecommended: PropTypes.array,
}

PokemonsRecommendPage.defaultProps = {
	pokemonRecommended: [],
}

export default PokemonsRecommendPage;