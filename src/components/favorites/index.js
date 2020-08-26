import React from 'react';
import { connect } from 'react-redux';
import useOpacity from '../../hooks/useOpacity';

import FavoritesPage from './FavoritesPage';

const Favorites = ({ failure }) => {

	//Hook personalizado
	const [stateOpacity] = useOpacity();

	return (
		<div style={ stateOpacity }>
			<FavoritesPage 
				failure={failure}
			/>
		</div>
	)
}

Favorites.defaultProps = {
	failure: true
}

const mapStateToProps = state => ({
	failure: state.getPokemonsRecommendedReducer.failure
})

export default connect(mapStateToProps)(Favorites);