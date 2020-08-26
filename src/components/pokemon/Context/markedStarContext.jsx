import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
	setLocalStorageActions, 
	removeLocalStorageActions 
} from '../../../redux/actions/localStorageActions';

export const MarkedStarContext = React.createContext();

const MarkedStarProvider = props => {

	const { data, setLocalStorageActions, removeLocalStorageActions, pokemonsLS } = props;
	
	const [addFavoriteStar, setAddFavoriteStar] = useState(null);
	const [activeStar, setActiveStar] = useState(null);
	const [pokemonPrev, setPokemonPrev] = useState(undefined);
	
	/*Se encarga de agregar la informacion del pokemon a favoritos y de guardar o remover en el localStorage*/
	useEffect(() => {
		
		if (data.name === undefined) return;

		setPokemonPrev(data.name);

		if (addFavoriteStar === null && activeStar === null) { 
			/*Este bloque se encarga de verificar que la estrella del pokemon halla sido marcada
			anteriormente, y de haber sido asi rellena la estrella.*/

			if (pokemonPrev === data.name) return;

			setActiveStar(pokemonsLS.some(el => el.id === data.id));
			setAddFavoriteStar(pokemonsLS.some(el => el.id === data.id));

		} else if (addFavoriteStar && activeStar === false) {
			/*Este bloque se encarga de agregar el pokemon al localStorage y de rellenar la estrella.*/
			setLocalStorageActions(data);
			setActiveStar(true);
		
		} else if (addFavoriteStar === false && activeStar === true) {
			/*Este bloque se encarga de eliminar el pokemon del localStorage y de quitar el relleno a la estrella.*/
			removeLocalStorageActions(pokemonsLS, data);
			setActiveStar(false);
		}
				
	}, [addFavoriteStar, activeStar, pokemonPrev, data, setLocalStorageActions, 
		removeLocalStorageActions, pokemonsLS]);

	return (
		<MarkedStarContext.Provider value={{
			setAddFavoriteStar,
			setActiveStar,
			setPokemonPrev,
			addFavoriteStar,
			data
		}}
		>{ props.children }
		</MarkedStarContext.Provider>
	)
}

const mapStateToProps = state => ({
	data: Object.keys(state.getPokemonReducer.pokemon).length === 0 ? state.getPokemonReducer.pokemonSearch: state.getPokemonReducer.pokemon,
	pokemonsLS: state.localStorageReducer.pokemons,
});

const mapDispatchToProps =  {
	setLocalStorageActions,
	removeLocalStorageActions
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkedStarProvider);