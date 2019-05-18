import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

const App = () => {
    const swapiService = new SwapiService();
    return (
        <div className="container">
            <ErrorBoundry>
                <SwapiServiceProvider value={ swapiService }>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />
                            <Route path="/" render={ () => <h2>Welcome to Star Wars Data Base</h2> } exact />
                            <Route path="/people" component={ PeoplePage } />
                            <Route path="/planet" component={ PlanetPage } />
                            <Route path="/starship" component={ StarshipPage } />
                        </div>
                    </Router>
                </SwapiServiceProvider>              
            </ErrorBoundry>
        </div>
    );
};

export default App;