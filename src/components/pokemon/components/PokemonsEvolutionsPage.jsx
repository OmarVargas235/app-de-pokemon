import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EvolutionStyles = styled.div`
	background: linear-gradient(-225deg,#021b79,#0575e6 54%,#ff3c56);
	border-radius: 50%;
	opacity: .7;
	overflow: hidden;
	cursor: pointer;
	transition: opacity .2s ease-in;

	&:hover {
		opacity: 1;
	}
`;

const PokemonsEvolutionsPage = ({ resetAndRedirect, evolutions }) => (
	<div className="row justify-content-center justify-content-sm-start">
		
		{
			evolutions.evolutions.evolutionsId.map((id, index) => (
				<div className="col-8 col-sm-4 mb-4" key={index}>
					<EvolutionStyles 
						onClick={ () => resetAndRedirect(index) }
					>
						<img className="img-fluid"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
						alt={evolutions.evolutions.name[index]}
						/>
					</EvolutionStyles>
				</div>
			))
		} 
	</div>
)

PokemonsEvolutionsPage.propTypes = {
	evolutions: PropTypes.object,
	resetAndRedirect: PropTypes.func,
}

PokemonsEvolutionsPage.defaultProps = {
	evolutions: {},
}

export default PokemonsEvolutionsPage;