import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import useOpacity from '../../hooks/useOpacity';

import ComparisonsPage from './ComparisonsPage';
import { data } from '../../utils/data';

const Comparisons = ({ failure }) => {
	
	const [search, setSearch] = useState('');
	const [keyEnter, setKeyEnter] = useState(false);
	const [dataSearch, setDataSearch] = useState([]);
	const [addPokemon,setAddPokemon] = useState([]);
	
	//Hook personalizado
	const [stateOpacity] = useOpacity();

	useEffect(() => {

		if (!keyEnter) return;

		const dataFilter = data.filter(el => el.name.indexOf(search.toLowerCase()) === 0 && el);
		setDataSearch(dataFilter);
		
		setKeyEnter(false);
		setSearch('');

	}, [search, keyEnter]);

	return (
		<div style={ stateOpacity }>
			<ComparisonsPage
				search={search} 
				setSearch={setSearch}
				setKeyEnter={setKeyEnter}
				dataSearch={dataSearch}
				addPokemon={addPokemon}
				setAddPokemon={setAddPokemon}
				failure={failure}
			/>
		</div>
	)
}

Comparisons.defaultProps = {
	failure: true
}

const mapStateToProps = state => ({
	failure: state.getPokemonReducer.failure
});

export default connect(mapStateToProps)(Comparisons);