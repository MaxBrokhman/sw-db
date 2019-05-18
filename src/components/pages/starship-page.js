import React from 'react';
import TwoColumnRow from '../two-column-row';
import { StarshipDetails, StarshipList } from '../sw-components';

export default class StarshipPage extends React.Component{
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
            left={ <StarshipList onListItemSelect={ this.onListItemSelect.bind(this) }/> }
            right={ <StarshipDetails itemId={ this.state.selectedItem } /> }/>
        );
    };
};