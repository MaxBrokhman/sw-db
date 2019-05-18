import React from 'react';
import TwoColumnRow from '../two-column-row';
import { PlanetDetails, PlanetList } from '../sw-components';

export default class PlanetPage extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedItem: null
        };
    };

    onListItemSelect(id){
        this.setState({
            selectedItem: id
        });
    };

    render(){
        return(
            <TwoColumnRow 
            left={ <PlanetList onListItemSelect={ this.onListItemSelect.bind(this) }/> }
            right={ <PlanetDetails itemId={ this.state.selectedItem } /> }/>
        );
    };
};