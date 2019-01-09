import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieService from './api/MovieService';
import MovieBrowser from './components/MovieBrowser/MovieBrowser';
import MovieDetails from './components/MovieDetails/MovieDetails';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.service = new MovieService('ee2d0533');
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route 
                            exact path="/"  
                            render={ (props) => <MovieBrowser {...props} service={ this.service } /> }
                        />
                        <Route 
                            path="/:imdbID"
                            render={ (props) => <MovieDetails {...props} service={ this.service } /> }
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
