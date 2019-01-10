import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
        }
    }

    performLogout = () => {
        this.setState({ redirect: true });
    }
    
    render() {
        if (this.state.redirect) return ( <Redirect to='/logout' /> );

        return (
            <div className="navbar">
                <button 
                    className="logoutButton"
                    onClick={ this.performLogout }>
                    Logout
                </button>
            </div>
        );
    }

}


export default Navbar;
