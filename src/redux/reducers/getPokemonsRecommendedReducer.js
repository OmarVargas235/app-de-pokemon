import {
	GET_POKEMONS_RECOMMENDED,
	GET_RECOMMENDED_SUCCESS,
	GET_RECOMMENDED_FAILURE
} from '../types/';

const initialState = {
	pokemonsRecommended: [],
	loader: true,
	failure: false
}

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case GET_POKEMONS_RECOMMENDED:
			return {
				...state,
				loader: true
			}

		case GET_RECOMMENDED_SUCCESS:
			return {
				...state,
				loader: false,
				failure: false,
				pokemonsRecommended: payload
			}

		case GET_RECOMMENDED_FAILURE:
			return {
				...state,
				loader: false,
				failure: true
			}

		default: return state;
	}
}