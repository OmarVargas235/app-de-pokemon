import {
	GET_EVOLUTIONS,
	GET_EVOLUTIONS_SUCCESS,
	GET_EVOLUTIONS_FAILURE,
} from '../types/';

export const getEvolutionsActions = id => async dispatch => {

	dispatch( getEvolutions() );

	let evolutions = [];

	try {
		const petitionSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
		const requestSpecies = await petitionSpecies.json();

		const petitionEvolution = await fetch(`${requestSpecies.evolution_chain.url.trim()}`);
		const requestEvolution = await petitionEvolution.json();

		requestEvolution.chain.evolves_to.forEach(el => {
			if (el.evolves_to.length > 0) evolutions = el.evolves_to.map(pokemon => pokemon.species);
			
			evolutions.push(el.species)
		})
		
		evolutions.push(requestEvolution.chain.species);
		
		const evolutionsOrder = evolutions.map(el => {
			const regex = /[0-9]+/gi;
			const validation = el.url.match(regex);
			validation.shift();

			const objectPokemon = {
				name: el.name,
				id: validation[0]
			}

			return objectPokemon;
		});

		const arrPokemonOrder = evolutionsOrder.sort((a, b) => a.id - b.id);

		const pokemon = {
			evolutionsId: arrPokemonOrder.map(el => el.id),
			name: arrPokemonOrder.map(el => el.name)
		}
		
		dispatch( getEvolutionsSuccess(pokemon) );
	
	} catch {
		console.log("error")
		dispatch( getEvolutionsFail() );
	}
}

const getEvolutions = () => ({
	type: GET_EVOLUTIONS,
})

const getEvolutionsSuccess = data => ({
	type: GET_EVOLUTIONS_SUCCESS,
	payload: data
})

const getEvolutionsFail = () => ({
	type: GET_EVOLUTIONS_FAILURE,
})