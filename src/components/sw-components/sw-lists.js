import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const renderName = ({ name }) => <span>{ name }</span>;

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const StarshipList = withData(withChildFunction(ItemList, renderName), getAllStarships);

const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);

export { PersonList, StarshipList, PlanetList };