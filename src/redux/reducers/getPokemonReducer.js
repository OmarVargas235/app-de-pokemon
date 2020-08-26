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

const initialState = {
	pokemonSearch: {},
	loader: true,
	failure: false,
	pokemon: {},
	description: ''
}

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case SEARCH_POKEMON:
			return {
				...state,
				loader: true
			}

		case SEARCH_POKEMON_SUCCESS:
			return {
				...state,
				loader: false,
				failure: false,
				pokemonSearch: payload
			}

		case SEARCH_POKEMON_FAILURE:
			return {
				...state,
				loader: false,
				failure: true
			}

		case GET_POKEMON:
			return {
				...state,
				pokemon: payload
			}

		case CLEAR_POKEMON:
			return {
				...state,
				pokemon: {},
				pokemonSearch: {}
			}

		case GET_DESCRIPTION:
			return {
				...state,
				loader: true
			}

		case GET_DESCRIPTION_SUCCESS:
			return {
				...state,
				loader: false,
				failure: false,
				description: payload
			}

		case GET_DESCRIPTION_FAILURE:
			return {
				...state,
				loader: false,
				failure: true
			}

		default: return state;
	}
}