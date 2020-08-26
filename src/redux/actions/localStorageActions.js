import {
	SET_LOCAL_STORAGE,
	GET_LOCAL_STORAGE,
	DELETE_LOCAL_STORAGE
} from '../types/';

export const setLocalStorageActions = pokemon => dispatch => {

	const getLS = JSON.parse(window.localStorage.getItem('pokemons'));
	
	if ( getLS === null ) {
		window.localStorage.setItem('pokemons', JSON.stringify([pokemon]));
		dispatch( setLocalStorage([pokemon]) );
	
	} else {		
		
		const arrPokemonLS = [...getLS];
		arrPokemonLS.push(pokemon);
		
		window.localStorage.setItem('pokemons', JSON.stringify(arrPokemonLS));
		dispatch( setLocalStorage(arrPokemonLS) );
	}
}

const setLocalStorage = pokemons => ({
	type: SET_LOCAL_STORAGE,
	payload: pokemons
})


/***********************************************************************************/

export const removeLocalStorageActions = (pokemons, data) => dispatch => {

	const deletePokemon = pokemons.filter(el => el.id !== data.id)

	window.localStorage.setItem('pokemons', JSON.stringify(deletePokemon));

	dispatch(deleteLocalStorage(deletePokemon));
}

const deleteLocalStorage = pokemons => ({
	type: DELETE_LOCAL_STORAGE,
	payload: pokemons
})

/***********************************************************************************/

export const getLocalStorageActions = () => dispatch => {

	const getLS = JSON.parse(window.localStorage.getItem('pokemons'));

	if ( getLS !== null ) dispatch( getLocalStorage(getLS) );
}

const getLocalStorage = pokemons => ({
	type: GET_LOCAL_STORAGE,
	payload: pokemons
})