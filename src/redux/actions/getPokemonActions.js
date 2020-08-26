import {
	SEARCH_POKEMON,
	SEARCH_POKEMON_SUCCESS,
	SEARCH_POKEMON_FAILURE,
	GET_POKEMON,
	CLEAR_POKEMON,
	GET_DESCRIPTION,
	GET_DESCRIPTION_SUCCESS,
	GET_DESCRIPTION_FAILURE
} from '../types/';

// Busqueda de pokemon por name en el input

export const getPokemonSearchActions = id => async dispatch => {

	dispatch( getPokemonSearch() );

	try {
		const petition = await fetch(`https://pokeapi.co/api/v2/pokemon/${
			isNaN(parseInt(id)) ? id.toLowerCase() : id }`);
		const request = await petition.json();
			
		const stats = request.stats.map(element => element.base_stat);

		const objectPokemon = {
			img: `https://pokeres.bastionbot.org/images/pokemon/${request.id}.png`,
			elements: request.types,
			name: request.name,
			abilities: request.abilities,
			weight: request.weight,
			height: request.height,
			stats,
			id: request.id
		}

		dispatch( getPokemonSearchSuccess(objectPokemon) );
	
	} catch {
		console.log("error")
		dispatch( getPokemonSearchFail() );
	}
}

const getPokemonSearch = () => ({
	type: SEARCH_POKEMON,
})

const getPokemonSearchSuccess = data => ({
	type: SEARCH_POKEMON_SUCCESS,
	payload: data
})

const getPokemonSearchFail = () => ({
	type: SEARCH_POKEMON_FAILURE,
})

// Busqueda de pokemon por id al hacer click en el boton 'SEE MORE'

export const getPokemonActions = data => dispatch => dispatch( getPokemon(data) );

const getPokemon = data => ({
	type: GET_POKEMON,
	payload: data
})

/**************************************************************************************/

export const getPokemonClearActions = () => ({
	type: CLEAR_POKEMON
})

// Obtener una descripcion del pokemon por id

export const getPokemonDescriptionActions = id => async dispatch => {
	dispatch( getPokemonDescription() );

	try {
		const petition = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
		const request = await petition.json();

		const descriptions = request.flavor_text_entries.filter(el => el.language.name === 'en');

		dispatch( getPokemonDescriptionSuccess(descriptions[descriptions.length - 1].flavor_text) );
	
	} catch {
		console.log("error")
		dispatch( getPokemonDescriptionFail() );
	}
}

const getPokemonDescription = () => ({
	type: GET_DESCRIPTION,
})

const getPokemonDescriptionSuccess = data => ({
	type: GET_DESCRIPTION_SUCCESS,
	payload: data
})

const getPokemonDescriptionFail = () => ({
	type: GET_DESCRIPTION_FAILURE,
})