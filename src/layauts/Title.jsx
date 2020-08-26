import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Start } from '../assets/img/star.svg';
import { ReactComponent as StartFilling } from '../assets/img/startFilling.svg';

const Hr = styled.div`
	height: 3px;
	background: #b92b27;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #000E2C, #011A3A, #2D182A, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #000E2C, #011A3A, #2D182A, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const ContainerTitle = styled.div`
	.degraded {
		background-image: linear-gradient(-225deg,#f18888,#bbc1bf 19%,#57c6e1 42%,#b49fda 79%,#7ac5d8);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.no-degraded {
		color: white;
	}

	.btn {
		padding: 0;
	}

`
const Title = ({ title, pokemonStar, pokemonPage, addFavoriteStar, setAddFavoriteStar }) => (
	<React.Fragment>
		<ContainerTitle className="d-flex justify-content-center align-items-center">
			<h2 
				className={`font-weight-bold mb-0 ${pokemonStar ? 'degraded' : 'no-degraded'}`}
				style={{fontSize: pokemonPage ? 1.625 + 'rem' : 2 + 'rem'}}
			>{title}</h2>
			
			{ 
				pokemonStar && 
				<div 
					className="ml-2 btn"
					onClick={ () => setAddFavoriteStar(!addFavoriteStar) }
				> { addFavoriteStar ? <StartFilling /> : <Start /> } </div> 
			}
		</ContainerTitle>
		
		<Hr className={`${(pokemonStar || pokemonPage) ? 'mb-3' : 'mb-5'}`}>
			<hr />
		</Hr>
	</React.Fragment>
)

export default React.memo(Title);