import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compareColorElement } from '../../../utils/helper';

const Badge = styled.span`
	font-size: 1.2rem; 
	color: white;
`;

const ElementsPages = ({ data }) => (
	<div className="mb-4">
		<span className="pokemonPage__text">Elements: </span>

		{
			data.elements.map(element => (
				<Badge 
					key={element.type.name} 
					className="badge ml-1 text-capitalize"
					style={{backgroundColor: compareColorElement(element.type.name)}}
				>{element.type.name}</Badge>
			))
		}
	</div>
)

ElementsPages.propTypes = {
	data: PropTypes.object,
}

ElementsPages.defaultProps = {
	data: {},
}

export default ElementsPages;