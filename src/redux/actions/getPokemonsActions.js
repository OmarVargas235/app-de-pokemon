import {
	GET_POKEMONS,
	GET_POKEMONS_SUCCESS,
	GET_POKEMONS_FAILURE
} from '../types/';

export const getPokemonsActions = () => async dispatch => {
	const sample = [ 216, 13, 81, 149, 197, 94, 56, 62, 74, 35, 202, 52, 53, 1, 6, 24, 25, 60, 105, 7, 18, 208, 311, 330, 331, 151, 158, 252, 144, 249, 384 ];

	const arrayPokemons = [];

	dispatch( getPokemons() );

	try {

		const promise = sample.map(async (id, index) => {
			
			const petition = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			const request = await petition.json();

			const stats = request.stats.map(element => element.base_stat);
		
			const objectPokemon = {
				img: request.sprites.other['official-artwork'].front_default,
				elements: request.types,
				name: request.name,
				abilities: request.abilities,
				weight: request.weight,
				height: request.height,
				id: request.id,
				stats
			}

			arrayPokemons.push(objectPokemon);
			index === sample.length - 1 && dispatch( getPokemonsSuccess(arrayPokemons) );
			// dispatch( getPokemonsSuccess(arrayPokemons) );
		})

		promise[0]
			.catch(error => dispatch( getPokemonsFail() ));

	} catch {
		console.log("error")
		// index === sample.length - 1 && dispatch( getPokemonsFail() );
		dispatch( getPokemonsFail() );
	}
}

const getPokemons = () => ({
	type: GET_POKEMONS,
})

const getPokemonsSuccess = data => ({
	type: GET_POKEMONS_SUCCESS,
	payload: data
})

const getPokemonsFail = () => ({
	type: GET_POKEMONS_FAILURE,
})