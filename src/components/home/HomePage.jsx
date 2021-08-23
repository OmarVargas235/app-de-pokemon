import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../layauts/Spinner';
import Title from '../../layauts/Title';
import CardPokemon from '../../layauts/CardPokemon';
import Alert from '../../layauts/Alert';

const HomePage = ({ data, failure }) => (
	<React.Fragment>
		<Title 
			title='Welcome to PokemonAPP'
		/>
		
		{
			failure ? <Alert mesagge='Oops, Something has gone wrong, reload' />
			: <div className="row">
				{
					data.loader ? <Spinner />
					: data.pokemonsHome.map((pokemon, index) => (
						<CardPokemon
							key={index} 
							pokemon={pokemon}
						/>
					)) 
				}
			</div>
		}
	</React.Fragment>
)

HomePage.propTypes = {
	data: PropTypes.object,
	failure: PropTypes.bool,
}

HomePage.defaultProps = {
	data: {},
	failure: true
}

const mapStateToProps = state => ({
	failure: state.getPokemonsReducer.failure
})

export default connect(mapStateToProps)(HomePage);