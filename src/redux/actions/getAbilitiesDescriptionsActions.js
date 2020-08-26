import {
	GET_ABILITIES_DESCRIPTIONS,
	GET_ABILITIES_DESCRIPTIONS_SUCCESS,
	GET_ABILITIES_DESCRIPTIONS_FAILURE,
	CLEAR_ABILITIES_DESCRIPTIONS
} from '../types/';

export const getAbilitiesDescriptionsActions = abilitysId => async dispatch => {

	dispatch( getAbilitiesDescription() );

	try {
		abilitysId.forEach(async id => {
			const petitionAbilities = await fetch(`https://pokeapi.co/api/v2/ability/${parseInt(id)}`);
			const requestAbilities = await petitionAbilities.json();

			const abilities = requestAbilities.flavor_text_entries.filter(el => el.language.name === 'en');

			const objectAbilities = {
				abilities: abilities[abilities.length - 1].flavor_text,
				id
			}

			dispatch( getAbilitiesDescriptionSuccess( objectAbilities ));
		})
	
	} catch {
		console.log("error")
		dispatch( getAbilitiesDescriptionFail() );
	}
}

const getAbilitiesDescription = () => ({
	type: GET_ABILITIES_DESCRIPTIONS,
})

const getAbilitiesDescriptionSuccess = data => ({
	type: GET_ABILITIES_DESCRIPTIONS_SUCCESS,
	payload: data
})

const getAbilitiesDescriptionFail = () => ({
	type: GET_ABILITIES_DESCRIPTIONS_FAILURE,
})

//Limpiar array de "descriopcion de habilidades"
export const clearAbilitiesDescriptionsAction = () => ({
	type: CLEAR_ABILITIES_DESCRIPTIONS,
	payload: []
})