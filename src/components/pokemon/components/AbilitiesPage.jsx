import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../../layauts/Spinner';

const AbilitiesPage = ({ abilities, abilitiesDescriptionsFilter, data }) => (
	<React.Fragment>
		{
			(!abilities.loader && abilitiesDescriptionsFilter.length > 0) ?
			abilitiesDescriptionsFilter.map((el, index) => (
				<div key={index}>
					<p>
						<span className="text-capitalize">
							{ 
								data.abilities[index] !== undefined 
								&& data.abilities[index].ability.name
							}
						</span>: 
						{'   '}  { el !== undefined && el.abilities}
					</p>
				</div>
			))
			: <div className="PokemonPage__spinner-evolutions"><Spinner /></div>
		}
	</React.Fragment>
)

AbilitiesPage.propTypes = {
	abilities: PropTypes.object,
	abilitiesDescriptionsFilter: PropTypes.array,
	data: PropTypes.object,
}

AbilitiesPage.defaultProps = {
	abilities: {},
	abilitiesDescriptionsFilter: [],
	data: {},
}

export default AbilitiesPage;