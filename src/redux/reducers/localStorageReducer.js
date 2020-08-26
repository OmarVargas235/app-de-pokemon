import {
	SET_LOCAL_STORAGE,
	GET_LOCAL_STORAGE,
	DELETE_LOCAL_STORAGE
} from '../types/';

const initialState = {
	pokemons: [],
}

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case SET_LOCAL_STORAGE:
			return {
				...state,
				pokemons: payload
			}

		case GET_LOCAL_STORAGE:
			return {
				...state,
				pokemons: payload
			}

		case DELETE_LOCAL_STORAGE:
			return {
				...state,
				pokemons: payload
			}

		default: return state;
	}
}