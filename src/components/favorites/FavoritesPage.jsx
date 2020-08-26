import React from 'react';

import Title from '../../layauts/Title';
import Alert from '../../layauts/Alert';

import PokemonsFavoritesPage from './components/PokemonsFavoritesPage';
import PokemonsRecommend from './containers/PokemonsRecommend';

const FavoritesPage = ({ failure }) => (
	<React.Fragment>
		{
			failure ? <Alert mesagge='Oops, Something has gone wrong, reload' />
			: <React.Fragment>
				<Title 
					title='Your favorite pokemon'
				/>
				
				<PokemonsFavoritesPage />
				
				<PokemonsRecommend />
			</React.Fragment>
		}
	</React.Fragment>
)	

FavoritesPage.defaultProps = {
	failure: true
}

export default FavoritesPage;