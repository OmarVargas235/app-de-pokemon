import {
	GET_ABILITIES_DESCRIPTIONS,
	GET_ABILITIES_DESCRIPTIONS_SUCCESS,
	GET_ABILITIES_DESCRIPTIONS_FAILURE,
	CLEAR_ABILITIES_DESCRIPTIONS
} from '../types/';

const initialState = {
	abilities: [],
	loader: true,
	failure: false
}

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case GET_ABILITIES_DESCRIPTIONS:
			return {
				...state,
				loader: true
			}

		case GET_ABILITIES_DESCRIPTIONS_SUCCESS:
			return {
				...state,
				loader: false,
				failure: false,
				abilities: [...state.abilities, payload]
			}

		case GET_ABILITIES_DESCRIPTIONS_FAILURE:
			return {
				...state,
				loader: false,
				failure: true
			}

		case CLEAR_ABILITIES_DESCRIPTIONS:
			return {
				abilities: []
			}

		default: return state;
	}
}