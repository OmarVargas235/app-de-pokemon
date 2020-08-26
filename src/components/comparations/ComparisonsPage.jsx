import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GraphStatistics from '../../layauts/GraphStatistics';
import Alert from '../../layauts/Alert';

import BoxSearchPage from './components/BoxSearchPage';
import PokemonsToCompare from './containers/PokemonsToCompare';

const InputComparisons = styled.div`
	.form-control {
		background-color: transparent; 
		border: 1px solid #868B8E;

		&:focus {
			box-shadow: 0 0 0 .1rem rgba(254,254,254, 0.25);
		}
	}
`;

const ComparisonsPage = props => {

	const {
		search, 
		setSearch, 
		setKeyEnter, 
		dataSearch,
		addPokemon,
		setAddPokemon,
		addPokemonStats,
		setAddPokemonStats,
		failure
	} = props;

	return (
		<InputComparisons>
			<input 
				type="text"
				placeholder="Search pokemon"
				className="form-control"
				onChange={ e => setSearch(e.target.value.trim()) }
				onKeyUp={ e => e.key === 'Enter' && setKeyEnter(true)}
				value={search}
			/>
			
			{
				failure ? <Alert mesagge='Oops, Something has gone wrong, reload' />
				: <React.Fragment>
					{ 
						dataSearch.length > 0 && <BoxSearchPage 
							dataSearch={dataSearch} 
							addPokemon={addPokemon}
							setAddPokemon={setAddPokemon}
						/> 
					}

					<div className="row mb-4">
						<PokemonsToCompare 
							addPokemon={addPokemon}
							addPokemonStats={addPokemonStats}
							setAddPokemonStats={setAddPokemonStats}
							setAddPokemon={setAddPokemon}
						/>
				
						{
							addPokemon.length > 0 
							? <div className="col-12 col-sm-8 d-flex justify-content-end justify-content-lg-start">
								<GraphStatistics stats={addPokemonStats} />
							</div>
							: null
						}
					</div>
				</React.Fragment>
			}
		</InputComparisons>

	)
}

ComparisonsPage.propTypes = {
	search: PropTypes.string,
	setSearch: PropTypes.func,
	setKeyEnter: PropTypes.func,
	dataSearch: PropTypes.array,
	addPokemon: PropTypes.array,
	setAddPokemon: PropTypes.func,
	addPokemonStats: PropTypes.array,
	setAddPokemonStats: PropTypes.func,
	failure: PropTypes.bool,
}

ComparisonsPage.defaultProps = {
	search: '',
	dataSearch: [],
	addPokemon: [],
	addPokemonStats: [],
	failure: true,
}

export default ComparisonsPage;