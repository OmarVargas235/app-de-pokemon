import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerStyles = styled.div`
	
	.ComparisonsPage__card-comparation {
		position: relative;
		background-color: #343A40;
		border-radius: 6px;
		width: 150px;
		height: 150px;

		img {
			max-width: 70%;
		}
	}

	.ComparisonsPage__text {
		background-image: linear-gradient(-225deg,#f18888,#bbc1bf 19%,#57c6e1 42%,#b49fda 79%,#7ac5d8);
	   -webkit-background-clip: text;
	   -webkit-text-fill-color: transparent;
		font-size: 1.1rem; 
	}

	.ComparisonsPage__close {
		width: 20px;
		height: 20px;
		background-color: #B83332;
		position: absolute;
		color: white;
		border-radius: 50%;
		right: 5%;
		cursor: pointer;
		transition: background-color .2s ease-in;

		&:hover {
			background-color: #9C1312;
		}
	}
	
	.item-enter {
		left: -120%;
	}

	.item-enter-done {
		left: 0;
		transition: left .3s ease-in-out;
	}

	.item-exit {
		left: 0;
	}

	.item-exit-active {
		left: -120%;
		height: 0;
		overflow: hidden;
		transition: left .3s ease-in-out,
					height .4s .2s ease-in-out;
	}

	.item-exit-done {
		left: -120%;
		height: 0;
	}
`;

const PokemonsToComparePage = ({ addPokemon, deletePokemonAndStats }) => (
	<ContainerStyles className="col-12 col-sm-4">

		<TransitionGroup className="d-flex flex-column align-items-center">		
			{
				addPokemon.map(el => (
					<CSSTransition
						key={el.id}
						timeout={{
							appear: 10,
							exit: 600,
						}}
						classNames="item"
					>
						<div className="ComparisonsPage__card-comparation mb-2 p-1 text-center">
							<div 
								className="ComparisonsPage__close"
								onClick={ () => deletePokemonAndStats(el) }
							>X</div>
							<img 
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${el.id}.png`} 
								alt={el.name}
								className="img-fluid"
							/>

							<p className="ComparisonsPage__text text-center mt-2"
							>{el.name}</p>			
						</div>
					</CSSTransition>
				))
			}
		</TransitionGroup>
	</ContainerStyles>
)

PokemonsToComparePage.propTypes = {
	addPokemon: PropTypes.array,
	deletePokemonAndStats: PropTypes.func,
}

PokemonsToComparePage.defaultProps = {
	addPokemon: [],
}

export default PokemonsToComparePage;