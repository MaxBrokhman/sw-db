import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ history }) => {

    return(
        <StarshipList onListItemSelect={ (itemId) => {
            history.push(`/sw-db/starship/${itemId}`);
        } }/> 
    );
};

export default withRouter(StarshipPage);
