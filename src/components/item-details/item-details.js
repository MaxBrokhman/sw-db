import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    );
};

export { Record };

export default class ItemDetails extends React.Component{

    constructor(){
        super();
        this.state = {
            item: null,
            loading: false,
            image: null
        };
        this.swapiService = new SwapiService();
    };

    componentDidMount(){
        this.updateItem();
    };

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    };

    updateItem(){
        const { itemId, getData, getImageUrl } = this.props;
        
        if(!itemId) return;

        this.setState({
            loading: true
        });

        getData(itemId)
            .then(item => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item.id)
                });
            });
    };

    render() {
        if(!this.state.item && !this.state.loading){
            return (<span>Select a item from a list</span>);
        } else if (this.state.loading){
            return (
                <div className="person-details card">
                    <Spinner />
                </div>
            );
        } else{
            const { item } = this.state
            const { name } = item;

            return (
                <div className="person-details card">
                    <img className="person-image"
                    src={ this.state.image } 
                    alt='person'/>
                    <div className="card-body">
                        <h4>{ name }</h4>
                        <ul className="list-group list-group-flush">
                            { React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            }) }
                        </ul>
                    </div>
                </div>
            );
        };
    };
};