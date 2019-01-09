import React, { Component } from 'react';
import MovieBrowser from './components/MovieBrowser/MovieBrowser';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MovieBrowser />
            </div>
        );
    }
}

export default App;
