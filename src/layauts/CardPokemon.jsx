import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getPokemonActions } from '../redux/actions/getPokemonActions';
import { getEvolutionsActions } from '../redux/actions/getEvolutionsActions';
import { compareColorElement } from '../utils/helper';

const Card = styled.div`
	background: linear-gradient(-225deg, rgba(2, 27, 121, .3) 0%, rgba(5, 117, 230, .3) 54%, rgba(255, 60, 86, .3) 100%);
	border: none;
	color: white;

	.card__btn-color {
		background-color: #99122A;
		transition: background-color .4s;
		color: white;

		&:hover {
			background-color: #D10E25;
		}

		&:focus {
			box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
		}
	}

	.badge {
		font-size: 1.2rem;
	}

	.card__bg-badge {
		background: linear-gradient(90deg,#232526,#414345);
	}
`;

const CardPokemon = ({ pokemon, history, getPokemonActions, getEvolutionsActions }) => (
	<div className="col-md-4 mb-3">
		<Card className="card">
			<img className="card-img-top" src={pokemon.img} alt={pokemon.name} />
		
			<div className="card-body">
				<h3 className="card-title text-center">{pokemon.name}</h3>

				<div>
					{
						pokemon.abilities.map((ability, index) => (
							<span 
								className="badge card__bg-badge mb-1 mr-1" 
								key={index}>{ability.ability.name}</span>
						))
					}
				</div>

				<div className="my-2">
					{
						pokemon.elements.map((element, index) => (
							<span 
								className="badge mr-1 mb-1 text-capitalize"
								style={{backgroundColor: compareColorElement(element.type.name)}} 
								key={index}>{element.type.name}</span>
						))
					}
				</div>

				<button 
					className="btn card__btn-color text-uppercase font-weight-bold btn-block"
					onClick={ () => {
						getPokemonActions(pokemon); 
						getEvolutionsActions(pokemon.id);
						history.push(`/pokemon/pokemon/${pokemon.name}`);
					}}
				>see more</button>
			</div>
		</Card>
	</div>
)

const mapDispatchToProps = {
	getPokemonActions,
	getEvolutionsActions
}

export default withRouter(connect('', mapDispatchToProps)(CardPokemon));