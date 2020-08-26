import { combineReducers } from 'redux';
import getPokemonsReducer from './getPokemonsReducer';
import getPokemonReducer from './getPokemonReducer';
import getAbilitiesReducer from './getAbilitiesReducer';
import getEvolutionsReducer from './getEvolutionsReducer';
import localStorageReducer from './localStorageReducer';
import getPokemonsRecommendedReducer from './getPokemonsRecommendedReducer';

export default combineReducers({
	getPokemonsReducer,
	getPokemonReducer,
	getAbilitiesReducer,
	getEvolutionsReducer,
	localStorageReducer,
	getPokemonsRecommendedReducer
});