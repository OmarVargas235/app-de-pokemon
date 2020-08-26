import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MarkedStarProvider from './Context/markedStarContext';

import Title from '../../layauts/Title';
import GraphStatistics from '../../layauts/GraphStatistics';

import TitleStarMarket from './container/TitleStarMarket';
import PokemonsEvolutions from './container/PokemonsEvolutions';
import ElementsPage from './components/ElementsPage';
import Abilities from './container/Abilities';

const StylePokemonPage = styled.div`
	.pokemonPage__text {
		background: -webkit-linear-gradient(top left, #D2A6A5 10%, #66C5DB 10%, #B1A0D9 );
	   -webkit-background-clip: text;
	   -webkit-text-fill-color: transparent;
		font-size: 1.1rem; 
	}

	.PokemonPage__spinner-evolutions {
		padding-top: 10rem;
	}
`;

const PokemonPage = ({ data, descriptionPokemon }) => (
	<StylePokemonPage className="row px-3">
		<MarkedStarProvider>
			<div className="col-12 col-sm-5">
				<img src={data.img} alt={data.name} className="img-fluid" />
			</div>

			<div className="col-12 col-sm-7 mt-4 mt-sm-0">
				<TitleStarMarket />

				<p className="pokemonPage__text">{descriptionPokemon}</p>

				<ElementsPage 
					data={data}
				/>

				<p className="mb-3 pokemonPage__text">Weight: {data.weight / 10} Kg</p>
				<p className="pokemonPage__text">Height: {data.height / 10} Mt</p>
			</div>

			<div className="col-12 col-sm-6 mt-5 pokemonPage__text">
				<Title
					title="Abilities"
					pokemonPage
				/>

				<Abilities 
					data={data}
				/>
			</div>

			<div className="col-12 col-sm-6 mt-5">
				<Title
					title="Statistics"
					pokemonPage
				/>

				<GraphStatistics stats={data.stats} />
			</div>

			<div className="col-12 mt-5">
				<Title
					title="Evolutions"
					pokemonPage
				/>	

				<PokemonsEvolutions />
			</div>
		</MarkedStarProvider>
	</StylePokemonPage>
)	

PokemonPage.propTypes = {
	data: PropTypes.object,
	descriptionPokemon: PropTypes.string,
}

PokemonPage.defaultProps = {
	data: {},
	descriptionPokemon: '',
}

export default PokemonPage;