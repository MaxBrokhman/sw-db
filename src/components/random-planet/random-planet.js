import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import PlanetView from '../planet-view';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends React.Component{
    constructor(){
        super();
        this.state = {
            planet: {},
            loading: true
        };
    };

    componentDidMount(){
        this.swapiService = new SwapiService();
        this.updatePlanet();
        //this.timer = setInterval(this.updatePlanet.bind(this), this.props.updateInterval);
    }

    onPlanetLoaded(planet){
        this.setState({
            planet, 
            loading: false,
            error: false
        });
    };

    onError(){
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet(){
        const id = +(Math.random() * 23).toFixed(0) + 2;
        this.swapiService.getPlanet(id)
            .then( (planet) => {
                this.onPlanetLoaded(planet);
                setTimeout(this.updatePlanet.bind(this), this.props.updateInterval);
            })
            .catch(error => {
                this.onError();
                console.log(error);
            });
    };

    render() {

        const { planet, loading, error } = this.state;
        
        let content;
        if(loading){
            content = <Spinner /> 
        } else if(error){
            content = <ErrorIndicator />
        } else{
            content = <PlanetView planet={ planet }/>
        };

        return (
            <div className="random-planet jumbotron rounded">
                { content }
            </div>
        );
    };
};

RandomPlanet.defaultProps = {
    updateInterval: 10000
};