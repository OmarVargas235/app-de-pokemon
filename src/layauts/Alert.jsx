import React from 'react';
import styled from 'styled-components';

const AlertDiv = styled.div`
	background-color: #940B1B;
	font-size: 1.1rem;
`; 

const Alert = ({ mesagge }) => (
	<AlertDiv className="alert text-light mt-5">{mesagge}</AlertDiv>
)

export default Alert;