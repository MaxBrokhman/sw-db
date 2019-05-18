import React from 'react';
import TwoColumnRow from '../two-column-row';
import { PersonDetails, PersonList } from '../sw-components';

export default class PeoplePage extends React.Component{
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
            left={ <PersonList onListItemSelect={ this.onListItemSelect.bind(this) }/> }
            right={ <PersonDetails itemId={ this.state.selectedItem } /> }/>
        );
    };
};