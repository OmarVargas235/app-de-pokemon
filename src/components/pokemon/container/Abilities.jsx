import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AbilitiesPage from '../components/AbilitiesPage';
import { 
	getAbilitiesDescriptionsActions, 
	clearAbilitiesDescriptionsAction 
} from '../../../redux/actions/getAbilitiesDescriptionsActions';

const Abilities = props => {

	const { 
		abilities, 
		data, 
		getAbilitiesDescriptionsActions, 
		clearAbilitiesDescriptionsAction 
	} = props;

	const [abilitiesDescriptionsFilter, setAbilitiesDescriptionsFilter] = useState([]);
	const [idAbilities, setIdAbilities] = useState([]);

	/*
		Este useEffect se encarga de obtener la descripcion de las habilidades del pokemon.
	*/
	useEffect(() => {
		clearAbilitiesDescriptionsAction();
	
		const abilitysId = data.abilities.map(el => {
			const regex = /[0-9]+/gi;
			const validation = el.ability.url.match(regex);
			validation.shift();

			return validation[0];
		});

		setIdAbilities(abilitysId);
		
		getAbilitiesDescriptionsActions(abilitysId); 

	}, [data, getAbilitiesDescriptionsActions, clearAbilitiesDescriptionsAction]);

	useEffect(() => {
		if (abilities.abilities.length < idAbilities.length || idAbilities.length === 0) return;
		
		/*Reacomada las descripciones de las habilidades en el mismo orden que estan los id que
		corresponden al titulo de cada habilidad*/
		const abilitiesFilter = idAbilities.map(id => {
			const filtreOrder = abilities.abilities.find(element => id === element.id && element);

			return filtreOrder; 
		})
		
		setAbilitiesDescriptionsFilter(abilitiesFilter);

	}, [abilities, idAbilities]);

	return (
		<AbilitiesPage
			abilities={abilities} 
			abilitiesDescriptionsFilter={abilitiesDescriptionsFilter}
			data={data}
		/>
	)
}

Abilities.propTypes = {
	abilities: PropTypes.object,
	data: PropTypes.object,
	getAbilitiesDescriptionsActions: PropTypes.func,
	clearAbilitiesDescriptionsAction: PropTypes.func,
}

Abilities.defaultProps = {
	abilities: {},
	data: {},
}

const mapStateToProps = state => ({
	abilities: state.getAbilitiesReducer,
});

const mapDispatchToProps =  {
	getAbilitiesDescriptionsActions,
	clearAbilitiesDescriptionsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Abilities);