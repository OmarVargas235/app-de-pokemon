import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/styles/bootstrap.min.css';

import store from './redux/store';
import NavBar from './components/navbar/';
import Home from './components/home/';
import Favorites from './components/favorites/';
import Comparisons from './components/comparations/';
import PokemonSearch from './components/pokemonSearch/';
import Pokemon from './components/pokemon/';

const Body = createGlobalStyle`
	body {
		background-color: black;
		overflow-x: hidden;
	}

	h2 {
		color: white;
	}
`;

const App = () => (
	<Provider store={store}>
		<Router>
			<NavBar />
			
			<Body />

			<div className="container">
				<Switch>
						<Route  path='/pokemon/home' component={Home} />
						<Route  path='/pokemon/favorites' component={Favorites} />
						<Route  path='/pokemon/comparisons' component={Comparisons} />
						<Route  path='/pokemon/search/:name' component={PokemonSearch} />
						<Route  path='/pokemon/pokemon/:id' component={Pokemon} />
						<Redirect from='/' to="/pokemon/home" />
				</Switch>
			</div>
		</Router>
	</Provider>
)

export default App;