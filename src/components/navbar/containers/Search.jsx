import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPokemonSearchActions } from '../../../redux/actions/getPokemonActions';
import SearchPage from '../components/SearchPage';
import { data } from '../../../utils/data';

const Search = ({ history, getPokemonSearchActions }) => {

	const [search, setSearch] = useState('');
	const [stateSearch, setStateSearch] = useState(false);
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		if (search === '') return;

		const dataFilter = data.filter(el => el.name.indexOf(search.toLowerCase()) === 0 && el);
		
		setSuggestions(dataFilter);
		
		/*Evita que la cadena 'search' este vacia y que ocurra la busqueda cuando haga click
		en el 'boton' o presione 'enter'.*/
		if (search.length >= 0 && !stateSearch) return;

		getPokemonSearchActions(search);
		setStateSearch(false);
		setSearch('');
		history.push(`/pokemon/search/${search.toLowerCase()}`)

	}, [search, history, stateSearch, getPokemonSearchActions]);

	return (
		<SearchPage 
			search={search}
			stateSearch={stateSearch}
			setSearch={setSearch}
			setStateSearch={setStateSearch}
			suggestions={suggestions}
		/>
	)
}

const mapDispatchToProps = {
	getPokemonSearchActions,
}

export default withRouter(connect('', mapDispatchToProps)(Search));