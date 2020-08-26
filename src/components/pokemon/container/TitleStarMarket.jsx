import React, { useContext } from 'react';
import Title from '../../../layauts/Title';
import { MarkedStarContext } from '../Context/markedStarContext';

const TitleStarMarket = () => {

	const { setAddFavoriteStar, addFavoriteStar, data } = useContext(MarkedStarContext);

	return (
		<Title
			pokemonStar
			pokemonPage
			addFavoriteStar={addFavoriteStar}
			setAddFavoriteStar={setAddFavoriteStar}
			title={data.name.toUpperCase()}
		/>
	)
}

export default TitleStarMarket;