import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AutoComplete from '../containers/AutoComplete';

const Container = styled.div`
	.form-inline__input {
		position: relative;
	}

	.form-inline__button {
		background-color: #401761;
		color: white;

		&:focus {
			box-shadow: 0 0 0 0.2rem #5C2A84;
		}
	}
`;

const SearchPage = ({ search, stateSearch, setSearch, setStateSearch, suggestions }) => (
	<Container className="form-inline">				
		<div className="form-inline__input">
			<input 
				className="form-control mr-sm-2" 
				type="text" placeholder="Search..." 
				onChange={e => setSearch(e.target.value.trim())}
				onKeyDown={ e => {
					(e.key === 'Enter' && e.target.value.trim() !== '') && setStateSearch(!stateSearch)
				} }
				value={search}
			/>

			<AutoComplete 
				search={search}
				setSearch={setSearch}
				suggestions={suggestions}
			/>
		</div>

		<button 
			className="btn form-inline__button ml-2 ml-sm-1" 
			type="submit"
			onClick={ () => {
				if (search.length === 0) return;
				setStateSearch(!stateSearch);
			} }
		>Search</button>
	</Container>
)

SearchPage.propTypes = {
	search: PropTypes.string,
	stateSearch: PropTypes.bool,
	suggestions: PropTypes.array,
	setSearch: PropTypes.func,
	setStateSearch: PropTypes.func,
}

SearchPage.defaultProps = {
	search: '',
	stateSearch: true,
	suggestions: [],
}

export default SearchPage;