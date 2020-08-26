import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AutoCompletePage from '../components/AutoCompletePage';

const AutoComplete = ({ suggestions, search, setSearch }) => {
	
	useEffect(() => {
		window.addEventListener('click', e => {
			if (e.path[0].getAttribute('class') === null) return;
			
			/*Si al hacer click en cualquier lado de la pagina no obtiene la clase 'form-control',
			vacia la cadena 'search' haciendo que el menu de sugerencias se quite de la pantalla*/
			(e.path[0].getAttribute('class').split(' ')[0] !== 'form-control') && setSearch('');
		})
		
		return () => {
			window.removeEventListener('click', e => {
				if (e.path[0].getAttribute('class') === null) return;
				
				(e.path[0].getAttribute('class').split(' ')[0] !== 'form-control') && setSearch('');
			});
		}
	}, [search, setSearch]);

	return (
		<React.Fragment>
			{
				search === '' ? null 
				: <AutoCompletePage 
					suggestions={suggestions}
				  />					
			}
		</React.Fragment>
	)
}

AutoComplete.propTypes = {
	suggestions: PropTypes.array,
	search: PropTypes.string,
	setSearch: PropTypes.func,
}

AutoComplete.defaultProps = {
	suggestions: [],
	search: '',
}

export default AutoComplete;