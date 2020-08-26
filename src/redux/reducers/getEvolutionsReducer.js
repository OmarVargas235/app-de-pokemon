import {
	GET_EVOLUTIONS,
	GET_EVOLUTIONS_SUCCESS,
	GET_EVOLUTIONS_FAILURE,
} from '../types/';

const initialState = {
	evolutions: {},
	loader: true,
	failure: false
}

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case GET_EVOLUTIONS:
			return {
				...state,
				loader: true
			}

		case GET_EVOLUTIONS_SUCCESS:
			return {
				...state,
				loader: false,
				failure: false,
				evolutions: payload
			}

		case GET_EVOLUTIONS_FAILURE:
			return {
				...state,
				loader: false,
				failure: true
			}

		default: return state;
	}
}