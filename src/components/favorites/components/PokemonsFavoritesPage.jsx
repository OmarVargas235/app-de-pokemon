import React from 'react';
import { connect } from 'react-redux';

import Alert from '../../../layauts/Alert';
import CardPokemon from '../../../layauts/CardPokemon';

const PokemonsFavoritesPage = ({ pokemonsLS }) => (
	<React.Fragment>
		<h2 className="my-4">{pokemonsLS.length > 1 ? 'Your favorites pokemons' : 'Your favorite pokemon'}</h2>

		{
			pokemonsLS.length === 0 ? <div style={{position: 'relative'}}><Alert mesagge="empty" /></div>
			: <div className="row">
				{
					pokemonsLS.map((pokemon, index) => (
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

PokemonsFavoritesPage.defaultProps = {
	pokemonsLS: [],
}

const mapStateToProps = state => ({
	pokemonsLS: state.localStorageReducer.pokemons,
});

export default connect(mapStateToProps)(PokemonsFavoritesPage);