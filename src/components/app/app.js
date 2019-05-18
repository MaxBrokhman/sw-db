import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

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
                            <Switch>
                                <Route path="/sw-db/" render={ () => <h2>Welcome to Star Wars Data Base</h2> } exact />
                                <Route path="/sw-db/people/:id?" component={ PeoplePage } />
                                <Route path="/sw-db/planet" component={ PlanetPage } />
                                <Route path="/sw-db/starship" exact component={ StarshipPage } />
                                <Route path="/sw-db/starship/:id" 
                                    render={ ({ match })=>{
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={ id } />
                                    } } />
                                <Route render={ () => <h2>Page not found</h2> } />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>              
            </ErrorBoundry>
        </div>
    );
};

export default App;