export default class SwapiService {

    constructor(){
        this._apiBase = 'https://swapi.co/api/';

        this.getAllPeople = this.getAllPeople.bind(this);
        this.getAllPlanets = this.getAllPlanets.bind(this);
        this.getAllStarships = this.getAllStarships.bind(this);
        this.getPerson = this.getPerson.bind(this);
        this.getPlanet = this.getPlanet.bind(this);
        this.getStarship = this.getStarship.bind(this);
        this.getPersonImage = this.getPersonImage.bind(this);
        this.getStarshipImage = this.getStarshipImage.bind(this);
        this.getPlanetImage = this.getPlanetImage.bind(this);
    };

   

    async getData(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if(!response.ok) {
            throw new Error('Server error');
        }
        return await response.json();
    }

    async getAllPeople(){
        const people = await this.getData(`people/`);
        return people.results.map(person => this._transformPerson(person));;
    };

    async getAllPlanets(){
        const planets = await this.getData(`planets/`);
        return planets.results.map(planet => this._transformPlanet(planet));
    };

    async getAllStarships(){
        const ships = await this.getData(`starships/`);
        return ships.results.map(starship => this._transformStarship(starship));
    };

    async getPerson(id){
        const person = await this.getData(`people/${id}`);
        return this._transformPerson(person);
    };

    async getPlanet(id){
        const planet = await this.getData(`planets/${id}`);
        return this._transformPlanet(planet);
    };

    async getStarship(id){
        const starship = await this.getData(`starships/${id}`);
        return this._transformStarship(starship);
    };

    getPersonImage(id){
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    };

    getStarshipImage(id){
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    };

    getPlanetImage(id){
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    };

    _extractId(item){
        return item.url.match(/\/(\d+)\/$/)[1];
    };

    _transformPlanet(planet){
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarship(starship){
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    _transformPerson(person){
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };
};