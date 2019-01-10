import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../../api/AuthenticationService';


class LogoutPage extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
        }
        this.service = new AuthenticationService();
    }

    componentDidMount = () => {
        this.service.logout();
        this.setState({ redirect: true });
    }

    render() {
        if (this.state.redirect) return ( <Redirect to='/login' /> );

        return ( <div>Logging out...</div> );
    }

}


export default LogoutPage;
