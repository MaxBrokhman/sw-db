import React from 'react';
import TwoColumnRow from '../two-column-row';
import { PersonDetails, PersonList } from '../sw-components';
import { withRouter } from 'react-router-dom';

 const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    return(
        <TwoColumnRow 
        left={ <PersonList onListItemSelect={ (id) => {history.push(id)} }/> }
        right={ <PersonDetails itemId={ id } /> }/>
    );
};

export default withRouter(PeoplePage);