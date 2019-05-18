import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

/*
getData("https://swapi.co/api/films/6/")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });*/
ReactDOM.render(<App />, document.getElementById('root'));