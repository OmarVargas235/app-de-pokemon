import {
	GET_POKEMONS_RECOMMENDED,
	GET_RECOMMENDED_SUCCESS,
	GET_RECOMMENDED_FAILURE
} from '../types/';

export const getPokemonsRecommendedActions = arrPokemos => dispatch => {

	dispatch( getPokemonsRecommended() );

	const arrayPokemons = [];
	let cont = 0;

	try {
		const promises = arrPokemos.map(async id => {
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
			cont++;

			return cont === arrPokemos.length && dispatch( getPokemonsRecommendedSuccess(arrayPokemons) );
		})
		
		promises[0]
			.catch(error => dispatch( getPokemonsRecommendedFail() ))

	
	} catch {
		console.log("error")
		dispatch( getPokemonsRecommendedFail() );
	}
}

const getPokemonsRecommended = () => ({
	type: GET_POKEMONS_RECOMMENDED,
})

const getPokemonsRecommendedSuccess = data => ({
	type: GET_RECOMMENDED_SUCCESS,
	payload: data
})

const getPokemonsRecommendedFail = () => ({
	type: GET_RECOMMENDED_FAILURE,
})