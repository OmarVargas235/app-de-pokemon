import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import useOpacity from '../../hooks/useOpacity';

import { 
	getPokemonSearchActions, 
	getPokemonDescriptionActions,
} from '../../redux/actions/getPokemonActions';

import { getEvolutionsActions } from '../../redux/actions/getEvolutionsActions';

import PokemonPage from './PokemonPage';
import Spinner from '../../layauts/Spinner';
import Alert from '../../layauts/Alert';

const Pokemon = props => {

	const {
		match,
		data, 
		descriptionPokemon,
		getPokemonSearchActions, 
		getPokemonDescriptionActions, 
		getEvolutionsActions,
		failure 
	} = props;

	//Hook personalizado
	const [stateOpacity] = useOpacity();
	
	/*
		Este useEffect se encarga de cuando se recarga la pagina estando en la 
		ruta '/pokemon/pokemon/'name-pokemon', llena el objeto 'data', con la infirmacion del
		pokemon en el que se encuentra actualmente.
	*/
	useEffect(() => {
		if (Object.keys(data).length === 0) {
			getPokemonSearchActions(match.params.id);
			getPokemonDescriptionActions(match.params.id);
			getEvolutionsActions(match.params.id);
		}

	}, [data, match, getEvolutionsActions, getPokemonSearchActions, getPokemonDescriptionActions]);
	
	/*
		Este useEffect se encarga de obtener (actualizar cuando cambia a otro pokemon) la descripcion de lo que hace el pokemon.
	*/
	useEffect(() => {
		if (Object.keys(data).length === 0) return;

		getPokemonDescriptionActions(data.id); 

	}, [data, getPokemonDescriptionActions]);
	
	return (
		<div style={ stateOpacity }>
			{
				failure ? <Alert mesagge='I am sorry, sometimes to failure' />
				: <React.Fragment>
					{
						Object.keys(data).length === 0 ? <Spinner />
						: <PokemonPage
							data={ data }
							descriptionPokemon={descriptionPokemon}
						/>
					}
				</React.Fragment>
			}
		</div>
	)
}

Pokemon.propTypes = {
	data: PropTypes.object,
	descriptionPokemon: PropTypes.string,
	getPokemonSearchActions: PropTypes.func,
	getPokemonDescriptionActions: PropTypes.func,
	getEvolutionsActions: PropTypes.func,
	failure: PropTypes.bool,
}

Pokemon.defaultProps = {
	data: {},
	descriptionPokemon: '',
	failure: true,
}

const mapStateToProps = state => ({
	data: Object.keys(state.getPokemonReducer.pokemon).length === 0 ? state.getPokemonReducer.pokemonSearch: state.getPokemonReducer.pokemon,
	descriptionPokemon: state.getPokemonReducer.description,
	failure: state.getEvolutionsReducer.failure
});

const mapDispatchToProps =  {
	getPokemonSearchActions,
	getPokemonDescriptionActions,
	getEvolutionsActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);