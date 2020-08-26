import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const AutoCompeteStyles = styled.div`
	background-color: white;
	opacity: .99;
	width: 95%;
	position: absolute;
	z-index: 1;
	top: 140%;
	box-shadow: 4px 4px 6px rgba(50, 50, 50);

	.search__text {
		cursor: pointer;
	    transition: background-color .1s;
	    padding: 5px 20px;
	    font-size: 1.2rem;

	    &:hover {
	    	background-color: rgba(0, 0, 0, 0.1);
	    }
	}
`;

const AutoCompletePage = ({ suggestions, history }) => {

	return (
		<AutoCompeteStyles className="mb-3">
			{
				suggestions.map(el => (
					<p 
						key={el.id} 
						className="search__text mb-0"
						onClick={ () => history.push(`/pokemon/search/${el.name.toLowerCase()}`) }
					>{el.name}</p>
				))
			}
		</AutoCompeteStyles>
	)
}

AutoCompletePage.propTypes = {
	suggestions: PropTypes.array,
}

AutoCompletePage.defaultProps = {
	suggestions: [],
}

export default withRouter(AutoCompletePage);