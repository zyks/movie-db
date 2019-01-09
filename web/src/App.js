import React, { Component } from 'react';
import MovieService from './api/MovieService';
import MovieBrowser from './components/MovieBrowser/MovieBrowser';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.service = new MovieService('ee2d0533');
    }


    render() {
        return (
            <div className="App">
                <MovieBrowser service={ this.service } />
            </div>
        );
    }
}

export default App;
