import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getPokemonSearchActions } from '../../redux/actions/getPokemonActions';
import PokemonSearchPage from './PokemonSearchPage';
import Spinner from '../../layauts/Spinner';
import Alert from '../../layauts/Alert';

const PokemonSearch = ({ data, match, getPokemonSearchActions }) => {	
	
	const { name } = match.params;

	useEffect(() => { getPokemonSearchActions(name); }, [name, getPokemonSearchActions]);

	return (
		<React.Fragment>
			{
				data.failure ? <Alert mesagge='Oops, Something has gone wrong, reload' />
				: <React.Fragment>
					{
						(Object.keys(data.pokemonSearch).length === 0 || data.loader) ? <Spinner />  
						: <PokemonSearchPage 
							data={data}
						/>
					}
				</React.Fragment>
			}	
		</React.Fragment>
	)
}

PokemonSearch.propTypes = {
	data: PropTypes.object,
	getPokemonSearchActions: PropTypes.func,
}

PokemonSearch.defaultProps = {
	data: {},
}

const mapStateToProps = state => {
	return {
		data: state.getPokemonReducer
	}
}

const mapDispatchToProps = {
	getPokemonSearchActions
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonSearch));