import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getPokemonSearchActions } from '../../../redux/actions/getPokemonActions';

const BoxSearchStyles = styled.div`
	background-color: #1A1A1A;
	border-radius: 6px;
	overflow-y: scroll;
	height: 300px;

	.ComparisonsPage__evolution {
		width: 60px;
		height: 60px;
		background: linear-gradient(-225deg,#021b79,#0575e6 54%,#ff3c56);
		border-radius: 50%;
		opacity: .7;
		overflow: hidden;
		cursor: pointer;
		transition: opacity .2s ease-in;

		&:hover {
			opacity: 1;
		}

		&:last-child {
			margin-bottom: 0 !important;
		}
	}	
`;

const BoxSearchPage = ({ dataSearch, addPokemon, getPokemonSearchActions, setAddPokemon }) => (
	<BoxSearchStyles className="my-4 p-3">
		{
			dataSearch.map(el => (
				<div className="ComparisonsPage__evolution mb-3" key={el.id}>
					<img 
						src={`https://pokeres.bastionbot.org/images/pokemon/${el.id}.png`} 
						alt={el.name} className="img-fluid"
						onClick={() => {
							/*Evita que se agregue mas de 4 pokemons y polemons repetidos*/
							if (addPokemon.length > 3 || addPokemon.some(e => e.id === el.id)) return;

							getPokemonSearchActions(el.id);
							setAddPokemon([...addPokemon, el]);
						}} 
					/>
				</div>
			))
		}
	</BoxSearchStyles>
)

BoxSearchPage.propTypes = {
	dataSearch: PropTypes.array,
	addPokemon: PropTypes.array,
	getPokemonSearchActions: PropTypes.func,
	setAddPokemon: PropTypes.func,
}

BoxSearchPage.defaultProps = {
	dataSearch: [],
	addPokemon: [],
}

const mapDispatchToProps = {
	getPokemonSearchActions
}

export default connect('', mapDispatchToProps)(BoxSearchPage);