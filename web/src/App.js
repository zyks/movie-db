import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieService from './api/MovieService';
import MovieBrowser from './components/MovieBrowser/MovieBrowser';
import MovieDetails from './components/MovieDetails/MovieDetails';
import LoginForm from './components/LoginForm/LoginForm';
import LogoutPage from './components/LoginForm/LogoutPage';
import PrivateRoute from './utils/PrivateRoute';


class App extends Component {

    constructor() {
        super();
        this.service = new MovieService('ee2d0533');
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute 
                            exact path="/"
                            component={ MovieBrowser }
                            service={ this.service }
                        />
                        <Route path="/login" component={ LoginForm } />
                        <Route path="/logout" component={ LogoutPage } />
                        <PrivateRoute 
                            path="/:imdbID"
                            component={ MovieDetails }
                            service={ this.service }
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}


export default App;
