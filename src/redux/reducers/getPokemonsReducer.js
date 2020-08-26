import {
	GET_POKEMONS,
	GET_POKEMONS_SUCCESS,
	GET_POKEMONS_FAILURE
} from '../types/';

const initialState = {
	pokemonsHome: [],
	loader: true,
	failure: false
}

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case GET_POKEMONS:
			return {
				...state,
				loader: true
			}

		case GET_POKEMONS_SUCCESS:
			return {
				...state,
				loader: false,
				failure: false,
				pokemonsHome: payload
			}

		case GET_POKEMONS_FAILURE:
			return {
				...state,
				loader: false,
				failure: true
			}

		default: return state;
	}
}