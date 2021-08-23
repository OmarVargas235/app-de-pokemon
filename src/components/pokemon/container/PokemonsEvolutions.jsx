import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MarkedStarContext } from '../Context/markedStarContext';

import PokemonsEvolutionsPage from '../components/PokemonsEvolutionsPage';
import Spinner from '../../../layauts/Spinner';
import { getPokemonClearActions } from '../../../redux/actions/getPokemonActions';

const PokemonsEvolutions = ({ history, evolutions, getPokemonClearActions, }) => {
	
	const { setAddFavoriteStar, setActiveStar, setPokemonPrev } = useContext(MarkedStarContext);

	const resetAndRedirect = index => {

		const name = evolutions.evolutions.name[index];

		setAddFavoriteStar(null);
		setActiveStar(null);
		setPokemonPrev(undefined);
		getPokemonClearActions(); 
		history.push(`/pokemon/pokemon/${name}`);
	}
	
	return (
		<React.Fragment>
			{
				evolutions.loader ? <div className="PokemonPage__spinner-evolutions"><Spinner /></div>
				: <PokemonsEvolutionsPage 
					resetAndRedirect={ resetAndRedirect }
					evolutions={evolutions} 
				/>
			}
		</React.Fragment>
	)
}

PokemonsEvolutions.propTypes = {
	evolutions: PropTypes.object,
	getPokemonClearActions: PropTypes.func,
}

PokemonsEvolutions.defaultProps = {
	evolutions: {},
}

const mapStateToProps = state => ({
	evolutions: state.getEvolutionsReducer,
});

const mapDispatchToProps =  {
	getPokemonClearActions
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonsEvolutions));