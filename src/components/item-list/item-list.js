import React from 'react';

import './item-list.css';

const ItemList = (props) => {
    const { data, onListItemSelect } = props;

    const renderItems = (arr) => {
        return arr.map(item => {
            return (
                <li className="list-group-item"
                    key={ item.id }
                    onClick={ () => onListItemSelect(item.id) }>
                    { props.children(item) }
                </li>
            );
        });
    };

    return (
        <ul className="item-list list-group">
            { renderItems(data) }
        </ul>
    );
};

export default ItemList;